// 배열: 여러 데이터를 순차적으로 담는 것
const colors = [ "red", "orange", "yellow", "green", "blue", "navy", "purple"]
// 문자열은 " ", 숫자는 그냥, 문자를 그냥 적으면 배열의 이름으로 인식한다.

console.log(colors[2])
// 0 1 2 > yellow

console.log(colors.push("black"))

console.log(colors.indexOf("black"))

console.log(colors.reverse())

// const 는 재배열은 불가능하나, '데이터'는 들어갈 수 있다.

// colors = [ "yellow", "green" ] //이런 것처럼 배열 자체를 다시 선언할 수 없는 것이다.