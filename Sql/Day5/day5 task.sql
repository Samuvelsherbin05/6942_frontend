
CREATE DATABASE student_management;

USE student_management;

CREATE TABLE student_courses (
    student_id INT,
    student_name VARCHAR(50),
    course_name VARCHAR(50),
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15),
    PRIMARY KEY (student_id, course_name)
);

INSERT INTO student_courses VALUES
(1, 'Arun', 'Java', 'Kumar', '9876543210'),
(1, 'Arun', 'Python', 'Priya', '9876543211'),
(2, 'Sam', 'Java', 'Kumar', '9876543210'),
(3, 'Lokesh', 'React', 'Ravi', '9876543212'),
(4, 'Priya', 'Python', 'Priya', '9876543211');

SELECT * FROM student_courses;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);

INSERT INTO students VALUES
(1, 'Arun'),
(2, 'Sam'),
(3, 'Lokesh'),
(4, 'Priya');


CREATE TABLE courses (
    course_name VARCHAR(50) PRIMARY KEY,
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15)
);

INSERT INTO courses VALUES
('Java', 'Kumar', '9876543210'),
('Python', 'Priya', '9876543211'),
('React', 'Ravi', '9876543212');


CREATE TABLE student_course (
    student_id INT,
    course_name VARCHAR(50),
    PRIMARY KEY (student_id, course_name),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_name) REFERENCES courses(course_name)
);

INSERT INTO student_course VALUES
(1, 'Java'),
(1, 'Python'),
(2, 'Java'),
(3, 'React'),
(4, 'Python');

CREATE TABLE trainers (
    trainer_id INT PRIMARY KEY,
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15)
);



CREATE TABLE courses_3nf (
    course_name VARCHAR(50) PRIMARY KEY,
    trainer_id INT,
    FOREIGN KEY (trainer_id) REFERENCES trainers(trainer_id)
);



SELECT
    s.student_name,
    sc.course_name,
    t.trainer_name
FROM students s
JOIN student_course sc
    ON s.student_id = sc.student_id
JOIN courses_3nf c
    ON sc.course_name = c.course_name
JOIN trainers t
    ON c.trainer_id = t.trainer_id;
    
