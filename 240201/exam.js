const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ expand: true })); // x-www-form-urlencoded방식
app.use(express.json()); // json방식

// view.engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('exam');
});

app.get('/getExam', (req, res) => {
    // get 방식일 때
    console.log(req.query);
    res.render('examResult', { title: 'GET요청 결과', userInfo: req.query });
});

app.post('/postExam', (req, res) => {
    console.log(req.body);
    res.render('eaxmResult', { title: 'GET요청 결과', userInfo: req.body });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
