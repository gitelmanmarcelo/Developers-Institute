CREATE TABLE students (
student_id serial PRIMARY KEY,
last_name VARCHAR(30),
first_name VARCHAR(30),
birth_date DATE);

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Marc','Benichou','19981102'),
('Yoan','Cohen','20101203'),
('Lea','Benichou','19870727'),
('Amelia','Dux','19960407'),
('David','Grez','20030614'),
('Omer','Simpson','19801003')

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Gitelman','Marcelo','19750505')

SELECT * FROM students

SELECT first_name,last_name FROM students

SELECT first_name,last_name FROM students WHERE student_id = 2

SELECT first_name,last_name FROM students WHERE last_name = 'Benichou'  AND first_name = 'Marc'

SELECT first_name,last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'

SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%'

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'

SELECT first_name, last_name FROM students WHERE SUBSTR(first_name,-2,1) = 'a'

SELECT first_name, last_name FROM students WHERE student_id = 1 OR student_id = 3

SELECT * FROM students WHERE birth_date >= '20000101'


