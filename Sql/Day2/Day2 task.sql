create database college_db;
use college_db;
create table students(
student_id int primary key auto_increment,
student_name varchar(50) not null,
student_age int check(student_age >=18),
student_email varchar(100) unique,
srudent_city varchar (100) default 'chennai',
admission_date date
);
desc students;
