// // 실습 4
// const inputAge1 = Number(prompt('나이를 입력해주세요.'));

// if (inputAge1 >= 20){
//     console.log('성인');
// }   else if (inputAge1 >= 17){
//     console.log('고등학생');
// }   else if (inputAge1 >= 14){
//     console.log('중학생');
// }   else if (inputAge1 >= 8){
//     console.log('초등학생')
// }   else{
//     console.log('유아')
// }

// // 실습 5

// const inputAge = Number(prompt('나이를 입력해주세요.'));
// const inputGd = prompt('성별을 입력해주세요.')
// if (inputAge >= 20){
//     console.log('성인');
//     if(inputGd === '남자'){
//         console.log('성인 남자');
//     }   else{
//         console.log('성인 여자');
//     }
// }   else if (inputAge >= 17){
//     console.log('고등학생');
//     if(inputGd === '남자'){
//         console.log('고등학생 남자');
//     }   else {
//         console.log('고등학생 여자');
//     }
// }   else if (inputAge >= 14){
//     console.log('중학생');
//     if(inputAge === '남자'){
//         console.log('중학생 남자');
//     }   else {
//         console.log('중학생 여자');
//     }
// }   else if (inputAge >= 8){
//     console.log('초등학생')
//     if (inputGd === '남자'){
//         console.log('초등학생 남자');
//     }    else {
//         console.log('초등학생 여자');
//     }
// }   else{
//     console.log('유아');
//     if(inputGd === '남자'){
//         console.log('유아 남자');
//     }   else{
//         console.log('유아 여자');
//     }
// }

// // 실습 6

// let now = new Date().getHours();
// console.log(now);
// now < 12 ? console.log('오전입니다.') : console.log('오후입니다.');
// // now >= 12 ? console.log('오후입니다.') : console.log('오전입니다.');

// // 실습 7
// const inputNum = Number(prompt('숫자 입력하세요.'));
// for (let i = 0; i <= inputNum; i++) {
//     if (i % 13 === 0 && i % 2 == 1) {
//         console.log(i);
//     }
// }

// // 실습 8
// for (let dan = 2; dan <= 9; dan++) {
//     console.log(`${dan}단`);
//     for (let i = 1; i < 10; i++) {
//         console.log(`${dan} x ${i} = ${dan * i}`);
//     }
// }

// 실습 9

// let n = 1;
// let sum = 0;
// while (n < 100) {
//     if (n % 2 == 0 || n % 3 == 0) {
//         sum += n;
//     }
//     n++;
// }
// console.log(sum);

let num = 50;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
