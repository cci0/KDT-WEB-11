const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

// 미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

// 라우터
const indexRouter = require('./routes'); // index.js는 생략 가능해서 안 적음
app.use('/', indexRouter);
const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

// 404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

// db(table) 동기화
// force: true 항상 테이블을 삭제 후 재생성
// force: false(기본값) 테이블이 존재하면 패스, 없으면 생성
db.sequelize.sync({ force: true }).then(() => {
    // 실행
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
