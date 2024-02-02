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
    res.render('exam'); // 페이지
});

// axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { name, genders, year, month, date, inters } = req.body;
    const data = {
        name: `안녕하세요 ${name}님`,
        gender: `성별은 ${genders}`,
        birth: `생년월일은 ${year}-${month}-${date}입니다`,
        inter: `취미는 ${inters}입니다`,
    };
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
