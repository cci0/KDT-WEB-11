// only typescript type

// Tuple
// 순서와 개수가 있는 배열
let drink: [string, number] = ['사이다', 1000];
drink[0] = '콜라';
drink.push('음료수'); // tuple의 한계 = 값이 추가된다
console.log(drink);

// readonly: 요소 타입 순서와 길이 고정
const drink2: readonly [string, number] = ['사이다', 1000];
// drink2.push('음료수'); // error

////////////////////////////////////////////
// Enum
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}

enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}

console.log('Auth.admin: ', Auth.admin);
console.log('Cafe.latte: ', Cafe.latte);

// 값을 넣지 않으면 숫자형으로 취급. 가장 위의 요소부터 0으로 할당
enum Cake {
    chocolate,
    vanilla,
    strawberry,
}

enum Cake2 {
    chocolate,
    vanilla,
    strawberry = '딸기 케이크',
}

console.log('Cake2.chocolate: ', Cake2.chocolate);
console.log('Cake2.strawberry: ', Cake2.strawberry);

////////////////////////////////////////////
// any (단, 지양하자)
// 명시적으로
let val: any;
val = true;
val = 1;
val = 'wow';
val = { name: 'codingon' };

// 암묵적으로
let val2;
val2 = false;
val2 = 'hi';

////////////////////////////////////////////
// 사용자 정의 타입

// 1. interface
interface Student {
    name: string;
    isPassed: boolean;
}

const student1: Student = {
    name: 'condingon',
    isPassed: true,
    // addr: 'seoul' /error
};

// enum 사용
enum Score {
    Aplus = 'A+',
    A = 'A',
    Bplus = 'B+',
    B = 'B',
    Cplus = 'C',
    C = 'C',
}

// interface 상속
interface BaseballClub extends Student {
    position: string;
    readonly height: number;
    backNumber?: number; // ?: 있어도 되고 없어도 된다
    [grade: number]: Score;
}

const otani: BaseballClub = {
    name: 'otani',
    isPassed: true,
    position: 'pitcher',
    height: 190,
    // score: Score.A,
    1: Score.A,
};

console.log(otani);
otani.position = '투수';
// otani.height = 189; error

// 2. type
type Bp1 = 500 | 700 | 1000;
// enum

// 교차 타입
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발');
    },
    color: 'blue',
    price: 10000,
};

type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: Gender;
};

let daniel: Person = {
    name: 'daniel',
    gender: 'F',
};
