const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
// === 페이지
app.get('/axiosGet', (req, res) => {
    res.render('get');
});

// 페이지 열기
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
