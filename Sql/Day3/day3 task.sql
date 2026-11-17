create database task_three;
use task_three;
create table patients(
patient_id int primary key,
patient_name varchar(50),
patient_age int,
gender varchar(50),
disease varchar(100),
admission_date date,
doctor_name varchar(50) 
);
desc patients;
alter table patients
rename column disease to dignosis;
alter table patients
add  contact_number int;
alter table patients
modify patient_name varchar(150);
alter table patients
rename  to patients_records;
desc patients_records;
create table courses(
course_id int primary key,
course_name varchar(100),
duration varchar(100),
course_fees int,
trainer_name varchar(50),
started_date date
);
alter table courses
add course_status varchar(100);
desc courses;
alter table courses
rename column trainer_name to instractor_name;
alter table courses
drop  column started_date;
alter table courses
modify duration varchar(100);
alter table courses
modify duration varchar(150);
create table customers(
customer_id int,
customer_name varchar(50),
customer_email varchar(100),
customer_city varchar(100),
customer_age int,
registration_date date
);
insert into customers
(customer_id,customer_name,customer_city)
values
(1,'sam','chennai'),
(2,'deepak','madhurai'),
(3,'lokesh','banglour'),
(4,'mahesh','madhurai'),
(5,'ragu','chennai'),
(6,'joy','chennai'),
(7,'keshav','pulicat'),
(8,'bose','chennai'),
(9,'pradap','chennai'),
(10,'udi','madhurai');
desc customers;
select * from customers;
insert into customers
(customer_id,customer_name,customer_city)
 values (11,'velu','kujarath');
insert into customers
(customer_id,customer_name,customer_city)
 values (12,'sherji','chennai');
insert into customers
(customer_id,customer_name)
values
(13,'bharath');
create table staff(
staff_id int,
staff_name  varchar(50),
department varchar(100),
city varchar (50),
salary int
);
insert into staff
(staff_id,staff_name,city)
values
(1,'sam','chennai'),
(2,'deepak','madhurai'),
(3,'lokesh','banglour'),
(4,'mahesh','madhurai'),
(5,'ragu','chennai'),
(6,'joy','chennai'),
(7,'keshav','pulicat'),
(8,'bose','chennai');
desc staff;
select * from staff;
INSERT INTO staff
(staff_id, staff_name, department, salary, city)
VALUES
(1,'sam','IT',35000,'chennai'),
(2,'deepak','HR',25000,'madhurai'),
(3,'lokesh','IT',30000,'banglour'),
(4,'mahesh','Finance',45000,'madhurai'),
(5,'ragu','HR',28000,'chennai'),
(6,'joy','IT',50000,'chennai'),
(7,'keshav','HR',32000,'pulicat'),
(8,'bose','Finance',20000,'chennai');
select * from staff;
desc staff;
update staff set salary = 40000 where staff_id = 3;
TRUNCATE TABLE staff;
select * from staff;
SET SQL_SAFE_UPDATES = 0;
UPDATE staff SET department = 'IT' WHERE staff_id = 5;
UPDATE staff SET salary = salary + 5000 WHERE department = 'HR';
UPDATE staff SET city = 'Chennai' WHERE salary > 30000;





