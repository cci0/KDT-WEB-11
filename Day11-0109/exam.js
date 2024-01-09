// 실습 1

function calculate(value1, value2, oper) {
    var value1 = Number(document.getElementById('value1').value);
    var value2 = Number(document.getElementById('value2').value);
    var oper = document.getElementById('oper').value;

    if (oper === '+') {
        document.getElementById('result').value = value1 + value2;
    } else if (oper === '-') {
        document.getElementById('result').value = value1 - value2;
    } else if (oper === '*') {
        document.getElementById('result').value = value1 * value2;
    } else if (oper === '/') {
        document.getElementById('result').value = value1 / value2;
    } else {
        document.getElementById('result').value = '잘못된 연산자입니다.';
    }
}

function reset() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('oper').value = '';
    document.getElementById('result').value = '';
}
