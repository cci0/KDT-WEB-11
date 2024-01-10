const btn = document.getElementById('btn');
const def = document.getElementById('default');
const input = document.getElementById('input');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    // console.log('안녕하세요.');
});

btn.addEventListener('mouseover', function () {
    console.log('mouseover');
});

input.addEventListener('focus', function () {
    console.log('focus');
});

input.addEventListener('blur', function () {
    console.log('blur');
});

input.addEventListener('keydown', function () {
    console.log('keydoen');
});

input.addEventListener('keyup', function () {
    console.log('keyup');
});

// this (본인)
// 그 함수가 속해있던 객체 참조
// 뭔가를 클릭할 때, 불러오는 함수(콜백함수)에서 this는 그 뭔가를 의미한다.

// 요소.preventDefault
def.addEventListener('click', function (e) {
    e.preventDefault(); // form 전송을 막는 메소드
    console.log(this);
    this.textContent = '클릭함';
});
