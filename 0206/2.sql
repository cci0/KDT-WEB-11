CREATE TABLE employees (
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(31) NOT NULL,
    department VARCHAR(31) NOT NULL,
    salary INT
);

-- SELECT * FROM kdt11.employees;

insert into employees (username, department, salary) values
('홍길동', 'IT개발팀', 5000),
('이몽룡', '마케팅팀', 4800 ),
('성춘향', '디자인팀', 4500),
('임꺽정', 'IT개발팀', 6000),
('흥부', '디자인팀', 6000),
('놀부', '디자인팀', 7000),
('장화', '마케팅팀', 5000),
('홍련', '마케팅팀', 5000),
('변사또', '인사팀', 4500),
('황진이', '디자인팀', 6000);

-- SELECT * FROM kdt11.employees;
-- SELECT DISTINCT department FROM employees;
-- SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > 5000;
SELECT sum(salary) AS sum_salary FROM employees;
SELECT count(*) AS count_employees FROM employees WHERE department = 'IT개발팀';