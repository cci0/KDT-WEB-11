// HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);
text.textContent = 'hi';
text.innerText = '안녕하세요.';
text.innerHTML = '여기는 <b>첫번째</b> 태그입니다.';

// .textContent: 요소 안에 텍스트를 가져오거나 수정
// .innerText: 요소 안에 텍스트를 가져오거나 수정
// 둘의 차이는?
// - .textContent: 공백 문자 그대로 반환한다.
// - .innerText: 남은 공백 문자를 제거, table today tr 등 테이블 요소 수정이 불가능하다.
// .innerHTML: 입력된 문자열을 HTML 형식으로. (태그도 포함하여 적용)

// .classList()
text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('title-big');
console.log(text.classList.contains('title'));
// .add: 클래스 추가
// .remove: 클래스 제거
// .toggle: 클래스가 있으면 제거, 없으면 추가
// .contains: 해당 클래스가 있는지 Boolean으로 알려준다.

// setAttribute:

const link = document.getElementById('link');
console.log(link);
link.setAttribute('href', 'https://www.naver.com');

const img = document.getElementById('image');
img.setAttribute('src', 'FODAoL5akAMqDrs.jpg');
img.setAttribute('width', '200');

const input = document.getElementById('input');
input.setAttribute('placeholder', '이름을 입력하세요.');
