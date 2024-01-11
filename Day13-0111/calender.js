
$('td').on('click', function(){
    console.log(this);
    console.log($(this).text());
    const selectDate = $(this).tect();

    $('#writeDay').val(selectDate);
})

function content() {
    // 작성 날짜(input writeDate)와 내용(input writeContent) 가져오기

    const selectedDate = $('#writeDate').val();
    const content = $('#writeContent').val();

 }