const HttpError = require('../models/http-error');
const Post = require('../models/post');
const Report = require('../models/report');

exports.report = async (req, res, next) => {
    // 일단 글 신고만 (댓글 X)
    // user_id는 신고된 글의 글쓴이
    const post_id = req.params.pid;
    try {
        [postOne] = await Post.fetchOne(post_id);
    } catch (err) {
        const error = new HttpError('신고된 글을 찾을 수 없음', 500);
        return next(error);
    }
    const report = new Report(null, postOne[0].user_id, post_id);

    try {
        await report.save();
    } catch (err) {
        const error = new HttpError('이용자 신고 실패', 500);
        return next(error);
    }

    res.status(200).json({
        message: '이용자 신고 성공',
    });
};
