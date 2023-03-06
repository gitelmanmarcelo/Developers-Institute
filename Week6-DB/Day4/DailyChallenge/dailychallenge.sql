Create a table called product_orders and a table called items. 
You decide which fields should be in each table, although make sure the items table has a column called price.
CREATE TABLE product_orders(
	order_id serial PRIMARY KEY,
	date DATE,
	client_name VARCHAR(50),
	client_address VARCHAR(50),
	seller VARCHAR(50)
)

CREATE TABLE items(
	item_id serial PRIMARY KEY,
	order_id integer REFERENCES product_orders(order_id) ON DELETE CASCADE ON UPDATE CASCADE,
	quantity integer NOT NULL,
	description VARCHAR(50) NOT NULL,
	price money NOT NULL
)

There should be a one to many relationship between the product_orders table 
and the items table. An order can have many items, but an item can belong to only one order.

Create a function that returns the total price for a given order.
CREATE FUNCTION tot_price(ord_id integer)
 RETURNS money AS $total$
BEGIN
 RETURN (SELECT SUM(price) FROM items INNER JOIN product_orders ON product_orders.order_id = items.order_id WHERE items.order_id = ord_id);
END;
$total$ LANGUAGE plpgsql;

SELECT * FROM tot_price(1)

Bonus :
Create a table called users.
There should be a one to many relationship between the users table and the product_orders table.
CREATE TABLE users(
	user_id serial PRIMARY KEY,
	order_id integer REFERENCES product_orders(order_id) ON DELETE CASCADE ON UPDATE CASCADE,
	user_name VARCHAR(50),
	user_address VARCHAR(50)
)

Create a function that returns the total price for a given order of a given user.
CREATE FUNCTION tot_price_usr(ord_id integer, usr_id integer)
 RETURNS money AS $total$
BEGIN
 RETURN (SELECT SUM(price) FROM items INNER JOIN product_orders ON product_orders.order_id = items.order_id 
		 WHERE items.order_id = ord_id);
END;
$total$ LANGUAGE plpgsql;
