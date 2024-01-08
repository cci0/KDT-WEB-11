// 실습 1
let nums = [];
for (let i = 0; i <= 100; i++) {
    nums.push(i);
}

let summ = 0;
for (let i = 0; i < summ.length; i++) {
    summ += num[i];
}

let summ2 = 0;
for (let num of nums) {
    summ2 += num;
}

let summ3 = 0;
nums.forEach((num) => {
    summ3 += num;
});

console.log(summ3);

// 실습 2

let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고', '두리안'];

// let same = [];
// let diff = [];

// for (let fruit of fruits1) {
//     fruits2.includes(fruit) ? same.push(fruit) : diff.push(fruit);
// }

// console.log('same', same);
// console.log('diff', diff);

// // 방법 1
// let same = [];
// let diff = [];

// fruits1.forEach((fruits) => {
//     if (fruits2.includes(fruits)) {
//         same.push(fruits);
//     }
// });

// fruits1.forEach((fruits) => {
//     if (!fruits2.includes(fruits)) {
//         diff.push(fruits);
//     }
// });

// 방법 2

let same = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));
let diff2 = fruits2.filter((fruit) => !fruits1.includes(fruit));
console.log('same', same);
console.log('diff', diff);
console.log('diff2', diff2);
