-- SELECT * FROM kdt11.newuser;

-- 1
SELECT * FROM newuser ORDER BY birthday ASC;
-- 2
SELECT * FROM newuser WHERE gender = 'M' ORDER BY name DESC;
-- 3
SELECT id, name FROM newuser WHERE birthday like '1990%';
-- 4
SELECT * FROM newuser WHERE birthday like '%-06-%' ORDER BY birthday ASC;
-- 5
SELECT * FROM newuser WHERE gender = 'M' and birthday like '1970%';
-- 6
SELECT * FROM newuser ORDER BY age DESC limit 3;
-- 7
SELECT * FROM newuser WHERE age between 25 and 50;
-- 8
UPDATE newuser SET pw = 12345678 WHERE id = 'hong1234';
-- 9
DELETE FROM newuser WHERE id = 'junkrat';
