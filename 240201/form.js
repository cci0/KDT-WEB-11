// 노드js는 순서가 무척 중요하다
// 가져오기
const express = require('express');
const app = express();
const PORT = 8000;

// 미들웨어
// body-parser
app.use(express.urlencoded({ expand: true })); // x-www-form-urlencoded방식
app.use(express.json()); // json방식

// view.engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('form');
});

app.get('/getForm', (req, res) => {
    // get 방식일 때
    console.log(req.query);
    res.render('result', { title: 'GET요청 결과', userInfo: req.query });
});

app.post('/postForm', (req, res) => {
    // post 방식일 때
    console.log(req.body);
    res.render('result', { title: 'POST요청 결과', userInfo: req.body });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
