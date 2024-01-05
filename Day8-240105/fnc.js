// // 함수
// // 함수 선언문 (기본적인 형태) 

// function sayHello() {
//     console.log("지역 Hello");
// }

// console.log("전역 Hello");
// sayHello();

// /////////////////////////// 함수 선언문 ////////////////////////////////
// //덧셈 기능이 있는 함수를 선언
// sumFunc(15,10); //hostiong (호이스팅)
// const num1 = 10; //전역 변수
// function sumFunc(num2, num3) { // num2는 매개변수. ()안의 변수들을 매개변수라고 한다.
//     const num1 = 11;
//     const sum = num1 + num2 + num3;
//     console.log("지역", num1); // 지역 변수가 없을 시, 전역 변수를 출력한다.
//     console.log("결과", sum);
//     //return 함수 제일 마지막에 사용. 값을 다시 전달한다.
//     return sum;
// }
// console.log("전역", num1);
// sumFunc(50, 10); //()안의 값을 '인자'라고 한다.
// //cost num2 = 50인 상태이다.
// //cost num3 = 10인 상태이다.
// let result = sumFunc(30, 20);
// // let result = 61 인 상태. 
// console.log(result);


//////////////////////////// 함수 표현식 /////////////////////////////////////
//sayHello();  호이스팅이 불가하다.
// let sayHello = function(num){
//     console.log(num)
//     console.log("Hello");
// }

// sayHello(20);

// //화살표 함수
// let sayHello = (num) => {
//     console.log(num)
//     console.log("Hello");
//     return num + 10;
// }

// sayHello(20);
// let result = sayHello(30);
// console.log(result)