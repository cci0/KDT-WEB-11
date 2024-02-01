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
    res.render('exam2');
});

app.post('/postExam', (req, res) => {
    console.log(req.body);
    res.render('examResult2', { title: 'GET요청 결과', userInfo: req.body });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
