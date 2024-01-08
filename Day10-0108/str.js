// 문자열 관련 메소드

let str = 'Happy day~!  ';
console.log(str.length);
// length: 문자열의 길이를 반환(공백 포함)

console.log(str.toUpperCase());
console.log(str.toLowerCase());
// toUpperCase() & toLowerCase(): 문자열 전체를 대문자, 혹은 소문자로 변경
// 이 둘은 보통 회원 가입시, 아이디 중복을 막기 위해 자주 사용한다.

console.log(str.indexOf('y'));
// indexOf(''): 매개변수로 문자열을 받아서 몇번째 인덱스인지 숫자 반환(단, 첫번째 문자만 검색)

console.log(str.slice(2)); //글자 자르기
console.log(str.slice(2, -5)); //두 개의 조건까지 가능, 음수일 때는 뒤에서부터
// slice()

console.log(str.replace('a', 'V'));
// replace(문자열1, 문자열2): 문자열 1을 문자열 2로 변경(단, 첫번째 문자만 변경)

console.log(str.replaceAll('p', 'v'));
// replaceAll(문자열1, 문자열2): 전체 문자 변경

console.log(str.repeat(5));
// repeat(n): 문자열을 n번 반복

console.log(str.trim());
// trim(): 문자열의 양끝 공백 없애기

console.log(str.split(' '));
// split('문자열'): 매개변수로 들어온 문자열을 기준으로 str을 쪼개서 배열로 저장

// console.log(str.replaceAll('p', 'a').trim().split(' '));
// 이런 식으로 쭉 이어서 명령을 적을 수 있다. (메소드 체이닝)

const colors = ['red', 'orange', 'yellow'];
console.log(colors.join('랑 '));
//join(): join 안의 문자열 기준으로 병합

console.log(str.replaceAll('p', 'a').trim().split(' '));
// 이런 식으로 쭉 이어서 명령을 적을 수 있다.
//메소드 체이닝: 순서가 정해진 것은 아니지만, 앞에서부터 처리하기 때문에 생각하며 적어야한다.

let hello = 'Hello~';
helloArr = hello.split('');
console.log(helloArr);

let reversHello = helloArr.reverse();
console.log(reversHello);

let helloAgain = reversHello.join('');
console.log(helloAgain);

// 위의 모든 과정을 메소드 체이닝으로 정리하면 아래와 같다.
console.log(hello.split('').reverse().join(''));
