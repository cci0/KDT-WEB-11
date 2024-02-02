const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ exrended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// router
app.get('/', (req, res) => {
    res.render('index'); // 페이지
});

app.get('/submit', (req, res) => {
    res.render('submit'); // 페이지
});

app.get('/func', (req, res) => {
    res.render('func'); // 페이지
});

// 요청과 응답

/**
 * render(): 뷰페이지 렌더링, render(뷰페이지 이름, 데이터(선택))
 * send(): 모든 타입 데이터 전송(즉, 문자열 배열 객체 숫자 등)
 * json(): 객체타입 데이터 전송
 * redirect(): 페이지 강제 이동
 */

// ajax
app.get('/ajax', (req, res) => {
    console.log('요청값', req.query);
    const { name, email } = req.query;
    // Front로 보내는 데이터
    res.send({ result: true, name: `${name}님`, email: `주소: ${email}` });
});

app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const { name, email } = req.body;
    // 프론트로 보내는 데이터
    res.send({ username: name, email });
});

// axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다`,
    };
    res.send(data);
});

// fetch
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/fetch', (req, res) => {
    console.log('요청값', req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
