const commentsModel = require('../model/comment');

// // 방법 1
// exports.main = (req, res) => {
//     res.render('index');
// };

// exports.comments = (req, res) => {
//     res.render('comments', { list: commentsModel });
// };

// exports.comment = (req, res) => {
//     console.log(req.params);
//     console.log(typeof req.params.page);
//     const page = Number(req.params.page);
//     // comments 배열의 요소에 접근 => 즉, 객체 하나 접근
//     res.render('comment', { data: commentsModel[page - 1] });
// };

// 방법 2 (화살표 함수)

const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { list: commentsModel });
};

const comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    // comments 배열의 요소에 접근 => 즉, 객체 하나 접근
    res.render('comment', { data: commentsModel[page - 1] });
};

module.exports = { main: main, comments: comments, comment: comment };
