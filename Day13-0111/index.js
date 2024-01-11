// class 조작
function addClass() {
    $('#hi').addClass('font-size');
}
function removeClass() {
    // ('#hi').removeClass('font-size'); 특정 클래스 삭제
    $('#hi').removeClass(); // 전체 클래스 삭제
}
function hasClass() {
    console.log($('#hi').hasClass('font-size')); // .hasClass('특정 클래스')의 유무를 true or false 반환
}
function toggleClass() {
    $('#hi').toggleClass('bg-color'); // 없으면 add, 있으면 remove
}
function switchClass() {
    $('#hi').switchClass('color-blue', 'color-red', 1000); // 1000 = 1초
}
