const express = require('express');
const { main, post, detail, write } = require('../controller');

const router = express.Router();

router.get('/', main); // 메인 페이지
router.get('/post', post); // 게시판 페이지
router.get('/post/:id', detail); // 상세 페이지
router.get('/write', write); // 글쓰기 페이지

module.exports = router;
