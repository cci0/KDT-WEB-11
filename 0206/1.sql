use kdt11;

create table user (
	id INT NOT NULL auto_increment primary key,
    username varchar(10) NOT null,
    age int not null,
    address varchar(100)
);

-- SELECT * FROM kdt11.user;

INSERT INTO user (username, age, address) values ('홍길동', 22, '서울시');
INSERT INTO user (username, age, address) values ('성춘향', 23, '경기도');
INSERT INTO user (username, age, address) values ('이몽룡', 22, '서울시');
INSERT INTO user (username, age, address) values ('엄석대', 19, '부산시');
INSERT INTO user (username, age, address) values ('임꺽정', 22, '서울시');
INSERT INTO user (username, age, address) values ('변사또', 25, '서울시');
INSERT INTO user (username, age, address) values ('황진이', 24, '제주도');

-- use kdt11;
SELECT * FROM user;
-- select * from user where age >= 23;
-- select * from user where address = '서울시';
-- select * from user where age >= 23 order by username asc;
-- select * from user where address like '서울시%'; -- 주소에 서울시가 들어가는 사람
-- select * from user where username like '__향'; -- 마지막 글자가 향인 사람
-- select * from user where age between 22 and 25;
-- select * from user where age in (23, 25) order by age desc limit 4;
-- select * from user where address is null;
-- update  user set address = '부산시', age = 25 where id = 1;
delete from user where id = 7;
