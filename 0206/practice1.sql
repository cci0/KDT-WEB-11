-- 설정
CREATE TABLE NewUser (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM( 'F', 'M', ' ' ) default '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL default 0
);

-- DATABASE
-- SELECT * FROM kdt11.newuser;

INSERT INTO newuser (id, pw, name, gender, birthday, age) values 
('hong1234', 123, '홍길동', 'M', '1990-01-31', 33),
('sexysung', 1234, '성춘향', 'F', '1992-03-31', 31),
('power70', 2345, '변사또', 'M', '1970-05-02', 53),
('hanjo', 3456, '한조', 'M', '1984-10-18', 39),
('widowmaker', 4567, '위도우', 'F', '1976-06-27', 47),
('dvadva', 5678, '송하나', 'F', '2001-06-03', 22),
('jungkrat', 6789, '정크랫', 'M', '1999-11-11', 24);

-- SELECT * FROM kdt11.newuser;
-- 1
SELECT * FROM newuser ORDER BY birthday ASC;
-- 2
SELECT * FROM newuser WHERE gender = 'M' ORDER BY name DESC;
-- 3
SELECT id, name FROM newuser WHERE birthday like '199%';
-- 4
SELECT * FROM newuser WHERE birthday like '%-06-%' ORDER BY birthday ASC;
-- 5
SELECT * FROM newuser WHERE gender = 'M' and birthday like '197%';
-- 6
SELECT * FROM newuser ORDER BY age DESC limit 3;
-- 7
SELECT * FROM newuser WHERE age between 25 and 50;
-- 8
UPDATE newuser SET pw = 12345678 WHERE id = 'hong1234';
-- 9
DELETE FROM newuser WHERE id = 'junkrat';
