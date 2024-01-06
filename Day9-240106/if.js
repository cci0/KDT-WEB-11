// //조건문
// // if문
// /*
// if (조건){
//     조건이 참일 때 실행
// }   else {
//     조건이 거짓일 때 실행
// }
// */

// if( 5 > 6 ) {
//     console.log("큽니다.");
// }   else {
//     console.log("작습니다.");
// }

// let inShow = true;
// let checked = false;
// //else는 선택
// if( inShow ) {
//     console.log('show!');
// }
// // if(조건)일 때, 조건은 참일 때 실행
// // 이 조건이 거짓일 때 실행하고 싶으면 not  연산자사용(!)
// if(!checked){
//     console.log('checked!');
// }

// //if /else if /else
// let name = '오류';
// if( name === '홍길동' ){
//     console.log('홍길동입니다.');
// }   else if(name === '성춘향') {
//     console.log('성춘향입니다.');
// }   else if(name === '이몽룡') {
//     console.log('이몽룡입니다.');
// }   else{
//     console.log('변사또입니다.');
// }

// //if 중첩
// const myId = 'abc';
// const myPw = '1234';
// const inputId = prompt('아이디를 입력하세요.')
// const inputPw = prompt('비밀번호를 입력하세요.')
// console.log(inputId, inputPw);

// if(myId === inputId){
//     if(myPw === inputPw){
//         console.log('로그인에 성공하였습니다.');
//     }   else {
//         console.log('비밀번호가 틀립니다.')
//     }
// }   else{
//     console.log('아이디가 틀립니다.');
// }

// // 삼항연산자
// let myId = 'abc';
// let myPw = '1234';
// const inputId = prompt('아이디를 입력하세요.');
// const inputPw = prompt('비밀번호를 입력하세요.');

// myId === inputId
//     ? myPw === inputPw
//         ? console.log('로그인에 성공하였습니다.')
//         : console.log('비밀번호가 틀렸습니다.')
//     : console.log('아이디가 틀립니다.');

// myId === inputId ? myPw === inputPw ? console.log('로그인에 성공하였습니다.') : console.log('비밀번호가 틀렸습니다.') : console.log('아이디가 틀립니다.');

// // swich 조건문

// /*
// swich(변수){
//     case 값1:    /변수 === 값1
//         break;
//     case 값2:   // 변수 === 값2
//         break;
//     default:
//         break;
// }
// break: 조건문, 반복문에서 빠져나갈 때 사용하는 키워드이다.
// */

// let a = 2 * 2;
// switch(a) {
//     case 3:
//         console.log('현재 값은 3입니다.');
//         break;
//     case 4:
//         console.log('현재 값은 4입니다.');
//         break;
//     case 5:
//         console.log('현재 값은 5입니다.');
//         break;
//     default:
//         console.log('알수없는 값입니다.');
//         break; //default에선 break 생략 가능
// }

// let grade = 'A';

// switch(grade) {
//     case 'A':
//         console.log("학점 A");
//         break;
//     case 'B':
//         console.log('학점 B');
//         break;
//     case 'C':
//         console.log('학점 C');
//         break;
//     case 'D':
//         console.log('학점 D');
//         break;
//     case 'F':
//         console.log('학점 F');
//         break;
//     default:
//         console.log('오류 발생')
// }
