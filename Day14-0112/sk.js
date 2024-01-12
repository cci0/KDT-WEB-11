// this 를 저장하기 위한 전역 변수
let target;

$('td > p').on('click', function () {
    console.log(this);
    console.log($(this).text()); // 날짜만 가져오기 위한 this의 text값을 나타내는 것.
    let date = $(this).text(); // 변수에 넣기
    $('#date').val(date); // input에 날짜 선택 = 위의 변수 넣기
    target = this;
});

function writeSchedule() {
    // 내용에 적은 값을 먼저 가져온다
    let content = $('#content').val();
    console.log(content);

    // 요소 추가로 내용을 날짜(this) 칸에 넣어야 한다.
    console.log('target', target);
    console.log('parent', $(target).parent()); // 부모로 올라가서
    $(target).parent().append(`<span>${content}</span>`); // 자식으로 넣기

    $('#content').val(''); // 입력 후 빈칸
    $('#date').val(''); // 입력 후 빈칸
}
