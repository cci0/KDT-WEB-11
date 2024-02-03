const express = require('express');
const multer = require('multer');
const path = require('path'); // 폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.get('/upload', (req, res) => {
    res.render('exam1');
});

// view engine
app.set('view engine', 'ejs');

// multer
const upload = multer({
    dest: 'uploads/',
});

// multer 세부설정
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },

        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + ext;
            done(null, newName);
        },
    }),

    limits: { fileSize: 5 * 1024 * 1024 },
});

// router
// === 페이지
app.get('/', (req, res) => {
    res.render('exam1');
});

// === 요청, 응답 데이터
// 싱글: single()
// uploda(multal).single(하나).('userfile')('프론트')
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log('file:', req.file);
    console.log(':', req.body);
});

// 페이지 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
