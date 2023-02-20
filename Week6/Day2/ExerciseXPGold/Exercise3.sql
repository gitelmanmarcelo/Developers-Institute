Exercise 3 : Items And Customers
Instructions
We will work on the public database that we created yesterday.

Part I

Create a table named purchases. It should have 3 columns :
id : the primary key of the table
customer_id : this column references the table customers
item_id : this column references the table items
quantity_purchased : this column is the quantity of items purchased by a certain customer
CREATE TABLE purchases (
id serial PRIMARY KEY,
customer_id integer,
item_id integer,
quantity_purchased integer)


Insert purchases for the customers, use subqueries:
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (3,3,1),
(5,2,10),
(1,1,2)
Scott Scott bought one fan
Melanie Johnson bought ten large desks
Greg Jones bougth two small desks
The table purchases should look like this:

id	customer_id	item_id	quantity_purchased
1	3	3	1
2	5	2	10
3	1	1	2


Here is the explanation of the first row:

id = 1, this is the auto-incrementing primary key
customer_id = 3, because the id of Scott Scott in the customers table is 3
item_id = 3, because the id of a fan in the items table is 3
quantity_purchased = 1, because Scott Scott bought one fan


Part II

Use SQL to get the following from the database:
All purchases. Is this information useful to us?
SELECT * FROM purchases

Is not very useful because we dont know the ids. We would have to search in other tables


All purchases, joining with the customers table.
SELECT * FROM purchases INNER JOIN customers ON customers.cust_id = purchases.customer_id

Purchases of the customer with the ID equal to 5.
SELECT * FROM purchases WHERE customer_id = 5

Purchases for a large desk AND a small desk
SELECT * FROM purchases INNER JOIN items ON purchases.item_id = items.item_id WHERE item_description IN ('Large desk','Small desk') 


Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
Customer first name
Customer last name
Item name
SELECT first_name, last_name, item_description FROM customers RIGHT JOIN purchases ON purchases.customer_id = customers.cust_id
INNER JOIN items ON items.item_id = purchases.item_id

Add a row which references a customer by ID, but does not reference an item by ID (leave it blank).
Does this work? Why/why not?
INSERT INTO purchases(customer_id, quantity_purchased)
VALUES(1,5)

Does not work because you cannot retrieve which item has been purchased. The record does not make sense:
the customer 1 bought 5 units of what ???