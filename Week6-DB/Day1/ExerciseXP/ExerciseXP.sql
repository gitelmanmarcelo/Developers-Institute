CREATE TABLE items (
	item_id serial PRIMARY KEY,
	item_description VARCHAR(30),
	item_price MONEY);
	
CREATE TABLE customers (
	cust_id serial PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30) );

INSERT INTO items(item_description, item_price)
VALUES ('Small desk', 100),
('Large desk', 300),
('Fan', 80);


SELECT * FROM items

INSERT INTO customers(first_name, last_name)
VALUES ('Greg','Jones');
('Sandra','Jones');
('Scott','Scott');
('Trevor','Green');
('Melanie','Johnson');

select * from customers

SELECT * from items WHERE (CAST(item_price AS decimal(10, 2)) > 80.00)

SELECT * from items WHERE (CAST(item_price AS decimal(10, 2)) <=300)

SELECT * FROM customers WHERE last_name = 'Smith'

SELECT * FROM customers WHERE last_name = 'Jones'

SELECT * FROM customers WHERE NOT(first_name = 'Scott')
