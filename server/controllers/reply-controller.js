const HttpError = require('../models/http-error');
const Reply = require('../models/reply');

// 댓글 리스트
exports.getReply = async (req, res, next) => {
    let replyList;
    const post_id = req.params.pid;
    try {
        [replyList] = await Reply.replyList(post_id);
    } catch (err) {
        console.log(replyList);
        const error = new HttpError('댓글을 불러오지 못했습니다.', 500);
        return next(error);
    }
    res.status(200).json(replyList);
};

// 댓글 작성 - layer => 0
exports.createReply = async (req, res, next) => {
    const content = req.body.content;
    const post_id = req.params.pid;
    const user_id = req.userData.userId;

    const createReply = new Reply(null, content, 0, null, post_id, user_id);
    try {
        await createReply.saveReply();
    } catch (err) {
        console.log(createReply);
        const error = new HttpError('댓글이 작성되지 않았습니다.');
        return next(error);
    }
    res.status(200).json({
        message: '댓글이 작성되었습니다.',
    });
};

// 대댓글 작성 - layer => 1 / 프론트에서 해당 그룹번호를 req로 전송
exports.createReply2 = async (req, res, next) => {
    const content = req.body.content;
    const post_id = req.params.pid;
    const user_id = req.userData.userId;
    const group_id = req.body.id; // 댓글의 pk값을 대댓글의 그룹번호 값으로

    const createReply = new Reply(null, content, 1, group_id, post_id, user_id);
    try {
        await createReply.saveReply2();
    } catch (err) {
        const error = new HttpError('댓글이 작성되지 않았습니다.');
        return next(error);
    }
    res.status(200).json({
        message: '댓글이 작성되었습니다.',
    });
};

// 댓글 삭제
exports.deleteReply = async (req, res, next) => {
    const reply_id = req.body.replyId;
    const post_id = req.params.pid;

    let reply;

    try {
        reply = await Reply.findReply(reply_id);
    } catch (err) {
        const error = new HttpError('삭제하려는 댓글이 존재하지 않습니다.', 500);
        return next(error);
    }

    if (reply[0][0].user_id !== req.userData.userId) {
        const error = new HttpError('댓글 삭제 권한 없음', 401);
        return next(error);
    }

    try {
        await Reply.deleteReply(reply_id, post_id, user_id);
    } catch (err) {
        const error = new HttpError('댓글 삭제 실패', 500);
        return next(error);
    }
    res.status(200).json({
        message: '댓글 삭제 성공',
    });
};
