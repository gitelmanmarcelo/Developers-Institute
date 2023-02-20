CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
-- creates a table named FirstTab with 2 columns: id(integer) and name(10 chars)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
-- insert the fields into the FisrtTable

SELECT * FROM FirstTab
-- displays all the data from FistTab

CREATE TABLE SecondTab (
    id integer 
)
-- creates a table named SecondTab with 1 column: id(integer)

INSERT INTO SecondTab VALUES
(5),
(NULL)
-- insert the values into the SecondTab

SELECT * FROM SecondTab
-- displays all the data from SecondTab

-- Q1. What will be the OUTPUT of the following statement?

    SELECT count(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- 0 because once we ask Postgres to check if the value is null (undefined) it cannot provide a result of
-- the comparison with undefined

Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- 2, except the 5 there are 6 and 7

Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- 0 because once we ask Postgres to check if the value is null (undefined) it cannot provide a result of
-- the comparison with undefined


Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- 2, except the 5 there are 6 and 7
	