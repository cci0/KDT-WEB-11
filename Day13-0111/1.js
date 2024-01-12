function selectDate() {
    // 클릭된 셀의 텍스트 가져오기
    var selectedDate = event.target.innerText;

    // 작성 날짜(input writeDate)에 값 채우기
    document.getElementById('writeDate').value = selectedDate;
}

function content() {
    // 작성 날짜(input writeDate)와 내용(input writeContent) 가져오기
    var selectedDate = document.getElementById('writeDate').value;
    var content = document.getElementById('writeContent').value;

    // 작성 날짜가 비어있으면 경고 메시지 표시
    if (!selectedDate) {
        alert('날짜를 선택해주세요.');
        return;
    }

    // 선택한 날짜에 해당하는 셀 찾기
    var cells = document.querySelectorAll('.calenderContent td');
    var selectedDateCell;

    cells.forEach(function (cell) {
        if (cell.innerText === selectedDate) {
            selectedDateCell = cell;
        }
    });

    // 선택한 날짜에 내용 추가
    if (selectedDateCell) {
        selectedDateCell.innerHTML = selectedDate + '<br>' + content;
    }
}
