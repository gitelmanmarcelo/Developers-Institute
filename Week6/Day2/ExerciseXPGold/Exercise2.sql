Update
‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. 
Update both their birth_dates to 02/11/1998.
UPDATE students
SET birth_date = '19981102'
WHERE last_name = 'Benichou'

SELECT * FROM students


Change the last_name of David from ‘Grez’ to ‘Guez’.
UPDATE students
SET last_name = 'Guez'
WHERE last_name = 'Grez'


Delete
Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou'


Count
Count how many students are in the table.
SELECT COUNT(first_name) FROM students

Count how many students were born after 1/01/2000.
SELECT COUNT(first_name) FROM students WHERE birth_date > '20000101'

Insert / Alter
Add a column to the student table called math_grade.
ALTER TABLE students
ADD COLUMN math_grade int


Add 80 to the student which id is 1.
UPDATE students
SET math_grade = 80
WHERE student_id = 1


Add 90 to the students which have ids of 2 or 4.
UPDATE students
SET math_grade = 90
WHERE student_id IN (2,4)


Add 40 to the student which id is 6.
UPDATE students
SET math_grade = 40
WHERE student_id = 6

Count how many students have a grade bigger than 83
SELECT COUNT(first_name) FROM students WHERE math_grade > 83

Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table.
Give him a grade of 70.
SELECT * FROM students

INSERT INTO students(first_name,last_name,birth_date,math_grade)
VALUES ('Omer','Simpson','19801003',70)

Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, 
although he received 2 different grades because he retook the math exam.

Bonus: Count how many grades each student has.
Tip: You should display the first_name, last_name and the number of grades of each student.
If you followed the instructions above correctly, all the students should have 1 math grade,
except Omer Simpson which has 2.
Tip : Use an alias called total_grade to fetch the grades.
Hint : Use GROUP BY.
SELECT COUNT(first_name),first_name FROM students GROUP BY first_name

SUM
Find the sum of all the students grades.
SELECT SUM(math_grade) FROM students
