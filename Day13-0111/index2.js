// // javaScript
// console.log(document);

// // jquery
// console.log($(document));
// $(document).ready(function () {
//     console.log('ready - 문서의 Dom 트리가 완성되면 실행되는 이벤트');
// });
// $(function () {
//     console.log('Hi');
// });

// click()
$('.hello').click(function () {
    $('.hello').css('color', 'red');
});
// $('.nums').click(function () {
//     // $('.nums').css('color', 'blue'); < 전부 다 바뀜
//     $(this).css('color', 'blue'); // < this는 클릭한 자기 자신만 = 이벤트가 적용된 요소
// });

// .on() (click뿐 아니라 모든 이벤트에 적용 가능)
$('.nums').on('click', function () {
    $(this).css('color', 'orange');
});

// mouseover(): 마우스 올렸을 때
$('.numbers').mouseover(function () {
    // $('numbers').css('background-color', 'green');
    // $('numbers').append('<li>.mouseover() call</li>');
    $(this).css('background-color', 'green');
});

// hover(): 마우스 올렸을 떄와 떼었을 때
// $('.div-hover').hover(
//     function () {
//         $(this).addClass('hover'); // 올렸을 때
//     },
//     function () {
//         $(this).removeClass('hover'); // 떼었을 떄
//     }
// );

$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
});

// scroll()
// ex. 윈도우 창 스크롤 할 경우
$(window).scroll(function () {
    console.log('scroll');
});

// keydown()

$('.input-key').keydown(function (e) {
    if (e.code === 'ArrowUp') {
        console.log('up');
    } else if (e.code === 'ArrowDown') {
        console.log('down');
    } else if (e.code === 'ArrowRight') {
        console.log('right');
    } else if (e.code === 'ArrowLeft') {
        console.log('left');
    }
    // console.log(event); // 입력창에 입력하면, console창 - code란에 키보드 위치가 뜬다
});
