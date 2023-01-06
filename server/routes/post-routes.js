const express = require('express');
const { body } = require('express-validator');

const postController = require('../controllers/post-controller');
const replyController = require('../controllers/reply-controller');
const verifyToken = require('../middleware/verify-token');

const router = express.Router();

// 유효 토큰 검증 미들웨어
router.use(verifyToken);

// GET => api/posts/ 전체 글 목록
router.get('/', postController.getPosts);

// POST => api/posts/ 글쓰기 - 제목 30자 이내, 내용 200자 이내
router.post('/', [body('title').isLength({ max: 30 }), body('content').isLength({ max: 200 })], postController.createPost);

// GET => api/posts/:pid 글번호가 특정하는 글 보기
router.get('/:pid', postController.getPost);

// DELETE => api/posts/:pid 글번호가 특정하는 글 삭제
router.delete('/:pid', postController.deletePost);

// GET => api/posts/user/:uid 해당하는 사용자 id가 쓴 글 목록 - 마이페이지
router.get('/user/:uid', postController.getMyPost);

// 댓글, 대댓글 ----
// GET => api/posts/:pid/reply
router.get('/:pid/reply', replyController.getReply);

// POST => api/posts/:pid/reply 댓글쓰기
router.post('/:pid/reply', replyController.createReply);

// POST => api/posts/reply2 대댓글쓰기
router.post('/:pid/reply2', replyController.createReply2);

module.exports = router;
