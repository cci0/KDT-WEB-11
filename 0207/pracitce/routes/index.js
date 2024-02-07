const express = require('express');
const controller = require('../controller');
const router = express.Router();

//router
//=== 페이지
router.get('/axiosPost', controller.axiosPost);

//=== 정보 요청
router.post('/resultPost', controller.resultPost);

module.exports = router;
