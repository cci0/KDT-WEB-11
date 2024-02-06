CREATE TABLE customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

INSERT INTO customer (id, name, birthday) values
('aaa', '홍길동', '1990-03-13'),
('bbb', '성춘향', '1997-09-21'),
('ccc', '이몽룡', '1995-12-11');

CREATE TABLE orderlist (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) -- ON DELETE CASCADE
);

INSERT INTO orderlist (customer_id, product_name, quantity) values
('aaa', '맥북프로', 1),
('bbb', '에어팟프로', 10),
('ccc', '키보드', 3),
('ccc', '핸드폰', 2),
('bbb', '애플워치' 7);

SELECT * FROM customer INNER JOIN orderlist ON customer.id = orderlist.customer_id;

-- SELECT customer.id as order_id, customer.name, orderlist.product_name FROM customer
-- INNER JOIN orderlist ON customer.id = orderlist.customer_id
-- WHERE orderlist.quantity >= 5;

SELECT a.id as order_id, a.name, b.product_name FROM customer as a
INNER JOIN orderlist as b ON a.id = b.customer_id
WHERE b.quantity >= 5;

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

DROP TABLE employees;
CREATE TABLE employees (
    employees_id INT PRIMARY KEY,
    username VARCHAR(31) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_id, department_name) values
(1, '기획팀'),
(2, 'IT개발팀'),
(3, '디자인팀');

INSERT INTO employees (employees_id, username, department_id) values
(1, '홍길동', 2),
(2, '성춘향', 3),
(3, '이몽룡', NULL),
(4, '임꺽정', 2),
(5, '황진이', 3);

SELECT a.employees_id, a.username, b.department_name 
FROM employees as a INNER JOIN departments as b
ON a.department_id = b.department_id

SELECT a.employees_id, a.username, b.department_name 
FROM employees as a LEFT JOIN departments as b
ON a.department_id = b.department_id