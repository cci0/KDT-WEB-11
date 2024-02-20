require('dotenv').config();
const express = require('express');
const aws = require('aws-sdk'); // aws 설정을 위한 모듈
const multer = require('multer');
const multerS3 = require('multer-s3'); // aws s3에 파일 업로드하기 위한 multer 설정
const app = express();
const PORT = 8000;

// aws 설정
aws.config.update({
    accessKeyId: process.env.ACCESSID, // 엑세스키
    secretAccessKey: process.env.SECRETKEY, // 엑세스 비밀번호
    regin: process.env.REGIN,
});

// aws s3 인스턴스 생성
const s3 = new aws.S3();

// multer 설정
const upload = multer({
    storage: multerS3({
        s3, // s3: s3
        bucket: 'kdt11test-bucket',
        acl: 'public-read', // 파일 접근 권한(public-read로 설정해야 업로드된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
// 페이지
app.get('/', (req, res) => {
    res.render('index');
});

// api
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
