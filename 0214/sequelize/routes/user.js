const express = require('express');
const controller = require('../controller/Cuser');

const router = express.Router();

//localhost:8000/api/user
//POST /signup 회원가입
router.post('/signup', controller.signup);
//POST /login  로그인
router.post('/login', controller.Clogin);
//GET /info 회원정보
router.get('/info/:id', controller.Cinfo);
//PATCH /update 회원수정
router.patch('/update', controller.Cupdate);
//DELETE /delete 회원삭제
router.delete('/delete', controller.Cdelete);
//GET /all 회원전체정보
router.get('/all', controller.Call);

module.exports = router;
