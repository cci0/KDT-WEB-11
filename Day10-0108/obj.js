// 시간
// 1970년 01월 01일 00시 기준으로 시작 (UTC) .대한민국 UTC+9
console.log(new Date(2024, 1));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // getMonth는 0부터 시작한다.
console.log(date.getDate()); // 날짜
console.log(date.getDay()); // 요일을 나타낸다. 1은 월요일, 0과 7은 일요일.
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(
    `${date.getFullYear()}년 ${
        date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);

// Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));
console.log(Math.random()); // 0 ~ 1 사이의 난수 표현
console.log(Math.round(1.6)); // 반올림
console.log(Math.floor(1.6)); // 버림
console.log(Math.ceil(1.4)); // 올림

console.log(Math.abs(10 - 28)); // 절대값 표시
console.log(Math.cbrt(2)); // 세제곱근을 반환
