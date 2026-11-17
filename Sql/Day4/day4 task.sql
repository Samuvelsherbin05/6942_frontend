create database compeny;
use compeny;
create table empoloyee(
emp_id int primary key auto_increment,
emp_name varchar (100),
emp_salary int,
department varchar (100)
);
desc empoloyee;
INSERT INTO empoloyee
(emp_name, emp_salary, department)
VALUES
('lokesh', 50000, 'IT'),
('Arun', 35000, 'finance'),
('mahi', 23000, 'Hr'),
('deepak', 60000, 'IT'),
('lokesh', 74000, 'Hr'),
('joy', 23000, 'finance');
select * from empoloyee;
select * from empoloyee where department = 'it' and emp_salary > 30000;
create table students(
student_id int primary key auto_increment,
student_name varchar(50) not null,
student_age int check(student_age >=18),
student_email varchar(100) unique,
srudent_city varchar (100) default 'chennai',
admission_date date
);
insert into students
(student_name,student_age,srudent_city) 
values
('sam',25,'chennai'),
('loki',23,'madhurai'),
('joy',40,'banglour'),
('rage',18,'chennai'),
('mahi',24,'pulicat');
select * from students;
select * from students where student_age between 18 and 25 and srudent_city in ('chennai' , 'madhurai');
SELECT department, COUNT(*) FROM empoloyee GROUP BY department;
select department, avg(emp_salary) from empoloyee where emp_salary > 25000 group by department having avg(emp_salary) > 40000;

