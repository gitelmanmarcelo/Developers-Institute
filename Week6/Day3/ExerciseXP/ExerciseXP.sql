Exercise 1: DVD Rental
Instructions
Get a list of all film languages.
SELECT name FROM language GROUP BY name

Get a list of all films joined with their languages – 
select the following details : film title, description, and language name. 
SELECT title, description, name FROM film INNER JOIN language ON film.language_id = language.language_id

Try your query with different joins:
Get all films, even if they don’t have languages.
SELECT title, description, name FROM film LEFT JOIN language ON film.language_id = language.language_id

Get all languages, even if there are no films in those languages.
SELECT title, description, name FROM film RIGHT JOIN language ON film.language_id = language.language_id

Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
id serial PRIMARY KEY,
name VARCHAR(40)
)

INSERT INTO new_film(name)
VALUES ('Crazy Home'),
('Lost Bird')

Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
It should have the following columns:
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.
CREATE TABLE customer_review(
review_id serial PRIMARY KEY,
film_id integer REFERENCES new_film(id) ON DELETE CASCADE ON UPDATE CASCADE,
language_id integer,
title VARCHAR(30),
score integer,
review_text TEXT,
last_update TIMESTAMP
)


Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id,language_id,title,score,review_text,last_update)
VALUES ((SELECT id from new_film WHERE name = 'Crazy Home'), 
		(SELECT language_id from language WHERE name = 'English'),'Crazy Home',5, 'Could be better',NOW()),
 ((SELECT id from new_film WHERE name = 'Lost Bird'),
  (SELECT language_id from language WHERE name = 'English'),'Lost Bird', 10, 'Amazing!',NOW())


SELECT * FROM customer_review

Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE name = 'Crazy Home'

The respective record in customer_review has been deleted


Exercise 2 : DVD Rental
Instructions
Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'German')
WHERE title = 'Crazy Home'

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title = 'Lost Bird'

Which foreign keys (references) are defined for the customer table?
How does this affect the way in which we INSERT into the customer table?
address_id is defined as FK
It does not let us delete records which have relation to the FK in the adress table
and it updates the adress table when we update the customer table


We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review
Since it doesnt have any FK its an easy step

Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(inventory_id) FROM rental WHERE return_date IS NULL

Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT title FROM film INNER JOIN inventory ON inventory.film_id = film.film_id 
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id WHERE return_date IS NULL 
ORDER BY rental_rate DESC LIMIT 30

Your friend is at the store, and decides to rent a movie.
He knows he wants to see 4 movies, but he can’t remember their names.
Can you help him find which movies he wants to rent?
The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title FROM film INNER JOIN film_actor ON film_actor.film_id = film.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id WHERE first_name ILIKE 'Penelope' 
AND last_name ILIKE 'Monroe' AND description ILIKE '%sumo wrestler%'

The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title FROM film WHERE length < 60 AND rating = 'R'

The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental,
and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title FROM film INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE rental_rate > 4 AND first_name ILIKE 'Matthew' AND last_name ILIKE 'Mahan'
AND return_date BETWEEN '20050728' AND '20050801'

The 4th film : His friend Matthew Mahan watched this film, as well.
It had the word “boat” in the title or description, 
and it looked like it was a very expensive DVD to replace.
SELECT title, replacement_cost FROM film INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE first_name ILIKE 'Matthew' AND last_name ILIKE 'Mahan'
AND (title ILIKE '%boat%' OR description ILIKE '%boat%') ORDER BY replacement_cost
