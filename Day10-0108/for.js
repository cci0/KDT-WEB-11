let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ['apple', 'banana', '수박', '포도', '파인애플'];

// 기본 for문
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of문
// for ({} 안에서 사용할 변수 of 배열)
for (let number of numbers) {
    console.log(number);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// [].forEach()문
// 변수명.forEach({} 안에서 사용할 변수, 인덱스, 배열) {}
// numbers.forEach( function() {

// })

// numbers.forEach( () => {

// })

numbers.forEach((number, index, array) => {
    console.log(number, index, array);
});

fruits.forEach(function (fruit, idx, arr) {
    console.log(fruit, idx);
});

// filter() 조건에 부합하는 배열 요소만 반환
let arr;
let arr2;
// arr = numbers.filter(function({}안에 사용할 변수) {
//     filter()의 {} 안에는 조건식이 나오는게 일반적(필터링 할 조건)
// })

arr = numbers.filter((num) => {
    return num > 3;
});
// 화살표 함수의 특징 중 하나는 {return }을 생략 가능하다.
arr2 = fruits.filter((num2) => num2.length > 2);

console.log(arr);
console.log(arr2);

// 배열 안에 있는 값을 더할 때 그 더한 값의 합의 변수는 전역 변수이다.
let sum1 = 0;
for (let number of numbers) {
    sum1 += number;
}
console.log(sum1);

// >>>>>>>>> 보충 <<<<<<<<<
// for in문
// 보통 객체 (키-값)에 주로 사용
// for ({}안에 사용할 index값 of 배열) {}
for (let ind in fruits) {
    console.log(fruits[ind]);
}

// do - while문
let i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);
