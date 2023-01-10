const HttpError = require('../models/http-error');
const Like = require('../models/like');

exports.likeCounter = async (req, res, next) => {
    const findUser = await Like.findUser(req.userData.userId, req.params.pid);

    if (findUser[0].length > 0) {
        Like.deleteLike(req.userData.userId, req.params.pid);
        return res.status(200).json({
            message: '좋아요 삭제 성공',
        });
    } else {
        const addLike = new Like(null, req.userData.userId, req.params.pid);

        try {
            await addLike.save();
        } catch (err) {
            const error = new HttpError('좋아요 저장 실패', 500);
            return next(error);
        }

        res.status(200).json({
            message: '좋아요 저장 성공',
        });
    }
};
