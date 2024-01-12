let i = 2; // 테이블 번호 2번부터 시작해야하기 때문에

function writeFunc() {
    let writer = document.getElementById('writer').value;
    let content = document.getElementById('writer').value;
    console.log(writer, writer);

    let tbody = document.getElementsByTagName('tbody')[0]; // 테이블 body 1번부터 시작

    let tr = document.createElement('tr'); // 한 행을 제작
    let tdNum = document.createElement('td'); // 한 열을 제작
    tdNum.textContent = i++; // 증가한다

    let tdWriter = document.createElement('td'); // rdWriter 열 제작
    tdWriter.textContent = writer; // 그리고 생성된 셀에 속성을 부여한다.

    let tdContent = document.createElement('td');
    tdContent.textContent = content;

    let tdDate = document.createElement('td');
    let now = new Date();
    tdDate.textContent = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} 
    ${now.getHours()}:${now.getMinutes()}`;

    tr.append(tdNum, tdWriter, tdContent, tdDate); // 순서대로 tr 안에 추가
    tbody.append(tr); // tbody 안에 tr을 추가
}
