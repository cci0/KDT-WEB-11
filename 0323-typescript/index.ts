console.log('안녕');

const msg: string = '타입스크립트를 배워보자!';
const num: number = 100;
console.log(msg);
console.log(num);

function sum(x: number, y: number): number {
    return x + y;
}
// sum(): 타입 > return 값이 이 타입이다

console.log(sum(10, 20));
