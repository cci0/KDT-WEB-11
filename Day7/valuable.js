//alert("링크방식")

//var
/*
var name = "홍길동";
var name = "나비";
var age; //값이 할당되지 않을때는 undefined가 할당
age = 20; //값을 할당 가능
console.log(age);
age = 10;
console.log(age);
*/

//let
/*
let name = "홍길동";
//let name = "나비"; //중복 선언 불가
console.log(name)
name = "성춘향"; //값을 할당가능
let age;    //값이 할당되지 않을때 undefined할당
console.log(age)
*/

/*
//const
const age = 20;
//age = 30; //값을 할당할 수 없음
const AGE = 20;
*/

//데이터 타입
//String
/*
let myName = "홍길동";
var email = 'gildong@naver.com';
let city = '서울';
console.log(myName, email, city);
console.log("안녕하세요 " + myName + "입니다" )
console.log(`안녕하세요 ${email}입니다`)
//Number
let number = 123;
console.log(number);
//Boolean
const checked = true;
const isShow = false;
console.log(checked, isShow);
//Undefined
//미할당 데이터
let noData;
console.log(noData);
//Null
//의도적으로 비어있음을 의미할때
let empty = null;
console.log(empty)
*/
//Array(배열)
let colors = ['red', 'orange', 'yellow', 'green'];
console.log(colors[0], colors[1])
console.log(colors.length) //배열의 길이
colors.push('blue'); //배열추가 (맨뒤)
colors.unshift("navy"); //배열추가 (맨앞)
colors.pop()    //배열제거(맨뒤)
colors.shift()  //배열제거(맨앞)
console.log(colors.indexOf("blue")) //index값찾기, 없을땐 -1
console.log(colors.includes("navy")) //값존재유무, 존재시true 없을시false
console.log(colors.reverse()) //배열값 반전
console.log(colors)