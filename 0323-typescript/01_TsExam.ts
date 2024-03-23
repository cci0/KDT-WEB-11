// 실습 1
let olimpic_newgame: readonly [object, boolean] = [
    {
        name: '쇼트트랙',
        type: '혼성 계주',
    },
    true,
];

// olimpic_newgame[1] = false; /error readonly

// 실습 2
interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
};

let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
};

// 실습 3
function sum1(a: number, b: number) {
    return a + b;
}
console.log(sum1(5, 11)); // 16

// 실습 4 (Spread Operator)
function sum2(...a: number[]) {
    let sum = 0;
    a.forEach((el) => (sum += el));
    return sum;
}
console.log(sum2(1, 2, 3, 4, 10)); // 20

// 실습 5
function arrElement<T>(arr: T[], index: number): T | boolean {
    if (arr.length <= index) {
        return false;
    }
    return arr[index];
}

console.log(arrElement<string>(['a'], 1));
