const Post = require('../models/post');

// 모든 글 목록
exports.getPosts = (req, res, next) => {
    Post.fetchAll()
        .then(([posts]) => {
            res.status(200).json(posts);
        })
        .catch((err) => console.log(err));
};

// 글 번호에 해당하는 글
exports.getPost = (req, res, next) => {
    const post_id = req.params.pid;
    Post.fetchOne(post_id)
        .then(([post]) => {
            res.status(200).json(post);
        })
        .catch((err) => console.log(err));
};

// 글 생성 - 보류
exports.createPost = (req, res, next) => {
    const { title, content } = req.body;
    const createPost = new Post(null, title, content, 1); // user_id는 현재 로그인된 아이디
    createPost
        .save()
        .then(() => {
            res.status(200).json({
                message: '글이 작성되었습니다.',
            });
        })
        .catch((err) => console.log(err));
};

// 글 삭제
exports.deletePost = (req, res, next) => {
    const post_id = req.params.pid;
    Post.deletePost(post_id).then(() => {
        res.status(200).json({
            message: '글이 삭제되었습니다.',
        });
    });
};
