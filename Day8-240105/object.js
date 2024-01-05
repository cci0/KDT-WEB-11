// // 오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태이다.
// let cat = {
//     name: 'Navi',
//     // Key: Value
//     // Js에서는 구조체 객체를 만들 때, 속성에 값을 대입하기 위해서는 '='가 아니라 ':'를 사용해야한다. 
//     age: 2,
//     isCute: true,
//     mew: function() {
//         return '야옹!'
//     }
// }


// console.log(cat.name)
// console.log(cat.age)
// console.log(cat.isCute)
// console.log(cat.mew())
// // 함수를 실행 시킬 때는 소괄호를 넣어야 한다.


// let people = {
//     name: '홍길동',
//     gender: '남자',
//     age: 26,
//     adress: '서울시 마포구',
//     phone: '010-1234-5678'
// }

// console.log(people)
// console.log(people.name)
// console.log(people.adress)

// // typeof 데이터가 이떤 타입인지 알려주는 키워드 typeof 쓰고 꼭 한칸 띄어야 한다.
// console.log(typeof "Hello");
// console.log(typeof true);
// const types = 20;
// console.log(typeof types);

// // 형변환: 데이터의 타입을 변환시켜주는 것
// let mathScore = prompt("수학 점수를 입력하세요.")
// //prompt(): 사용자에게 데이터를 입력받게 하는 것
// let engScore = prompt("영어 점수를 입력하세요.")

// let sum = (mathScore+engScore)
// console.log(typeof sum)
// // 이때까지만 해도 string 문자열이였다.

// // 형 변환 전
// let avg = (mathScore + engScore) / 2
// // 형 변환 후
// let avg = (Number(mathScore) + Number(engScore)) / 2
// console.log(avg)

// // prompt로 입력 받은 값은 문자로 저장이 된다. 즉, 50 + 90 = 5090
// // 그러나 JavaScript에서는 자동 형변화를 해버린다.

// // 문자 형변환
// let num = 123;
// console.log(typeof num)

// let a = String(num)
// console.log(typeof a)

// let b = num.toString() //null과 undefind에서 사용 불가능하다.
// console.log(typeof b)

// console.log(Number("1231321")) //숫자만 적어야 한다.
// console.log(Number("adasdaf")) //오류

// //기본 연산자
// console.log(1+1)
// console.log(1-1)
// console.log(1*5)
// console.log(4/2)
// console.log(100 % 2)
// console.log(99 % 2)
// console.log(2 ** 4)
// let num = 5
// num += 10 // num = num + 10과 동일
// console.log(num)

// // 증가 감소 연산자

// let result1, result2;
// let nums = 10, nums2 = 15;

// result1 = nums++; // 다음 줄부터 증가. 즉, 여기선 10
// result1 = nums++; // 여기서부터 11
// console.log(result1)

// result2 = ++nums2; // 해당 줄부터 증가. 16
// result2 = ++nums2; // 17
// console.log(result2)

// // 비교연산자 (일치연산자)

// let a = 123;
// let b = "123";

// console.log(a == b) // true 변수값이 같냐
// console.log(a != b) // false 변수값이 다르냐
// console.log(a === b) // false 자료형까지 같냐
// console.log(a !== b) // true 자료형이 다르냐

// //논리 연산자

// let name = "뽀로로"
// let age = 18;
// let isAdult = age > 19; // false

// // || or 연산자는 둘 중 하나만 조건이 일치해도 통과
// if (name == "뽀로로" || age > 19 ) {
//     console.log('통과');
// }   else {
//     console.log('돌아가');
// }

// // && and 연산자는 조건 모두 일치해야 통과
// if (name == "뽀로로" && age > 19 ) {
//     console.log('통과');
// }   else {
//     console.log('돌아가');
// }

// // ! not 조건이 아닐 때 통과
// if ( !isAdult) {  // isAdult 가 false가 아니기 때문에 true다.
//     console.log('통과');
// }   else {
//     console.log('돌아가');
// }

