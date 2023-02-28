-- Exercise 1: DVD Rental
-- Instructions
-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT rating,COUNT(*) FROM film GROUP BY rating

-- Get a list of all the movies that have a rating of G or PG-13.
SELECT title, rating FROM film WHERE rating IN ('G','PG-13')

-- Filter this list further: look for only movies that are under 2 hours long, 
-- and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT title, length, rating, rental_rate FROM film WHERE rating IN ('G','PG-13')
AND length < 120 AND rental_rate < 3 ORDER BY title

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE customer
SET first_name = 'Marcelo', last_name = 'Gitelman'
WHERE customer_id = 1

SELECT * FROM CUSTOMER ORDER BY customer_id

UPDATE address
SET address = 'new address'
WHERE address_id = 5

SELECT * FROM customer INNER JOIN address ON customer.address_id = address.address_id ORDER BY customer_id

