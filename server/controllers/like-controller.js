const HttpError = require('../models/http-error');
const Like = require('../models/like');

// 로그인 구현되면 1212 부분 전부 현재 로그인된 아이디로 변경
exports.likeCounter = async (req, res, next) => {
    const findUser = await Like.findUser(1212, req.params.pid);

    if (findUser[0].length > 0) {
        Like.deleteLike(1212, req.params.pid);
        return res.status(200).json({
            message: '좋아요 삭제 성공',
        });
    } else {
        const addLike = new Like(null, 1212, req.params.pid);

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

// 내가 좋아요 한 글
exports.myLikeList = async (req, res, next) => {
    let likeList;
    const user_id = 1212;
    try {
        [likeList] = await Like.myLikeList(user_id);
    } catch (err) {
        const error = new HttpError('글을 불러오지 못했습니다.', 500);
        return next(error);
    }
    res.status(200).json(likeList);
};
