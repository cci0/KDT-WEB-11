const { Member } = require('../models');

// 회원가입
exports.signup = async (req, res) => {
    const { memberId, pw } = req.body;
    // 존재 여부 확인
    const find = await Member.findOne({ where: { memberId } });
    console.log('find', find);

    if (find) {
        res.json({ result: false, message: '이미 존재하는 회원입니다' });
    } else {
        // 생성 create
        const result = await Menubar.create({ memberId, password: pw });
        console.log('signup', result);
        res.json({ result: true });
    }
};

// 로그인
exports.login = async (req, res) => {
    const { memberId, pw } = req.body;
    // 검색 findOne
    const result = await Member.findOne({ where: { memberId, password: pw } });
    console.log('login', result);

    if (result) {
        res.json({ result: true, data: result });
    } else {
        res.json({ result: false });
    }
};

// 회원 정보 조회
exports.find = async (req, res) => {
    const { id } = req.params;
    const result = await Member.findOne({ whrer: { id } });
    console.log('find', result);
    res.json({ result: true, data: result });
};

// 정보 수정
exports.update = async (req, res) => {
    const { id, pw } = req.body;
    const result = await Member.update({ password: pw }, { where: { id } });
    console.log('update', result);
    res.json({ result: true });
};

// 회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ result: true });
};
