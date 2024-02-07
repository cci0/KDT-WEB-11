const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

// router
router.get('/', controller.main);

router.get('/comments', controller.comments);

// :page는 { page: "값" } 형태. :이 붙고 안 붙고 차이가 크다.
router.get('/comment/:page', controller.comment);

// 외부와 연결
module.exports = router;
