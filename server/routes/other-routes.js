const express = require('express');

const verifyToken = require('../middleware/verify-token');
const noteController = require('../controllers/note-controller');
const licenseController = require('../controllers/license_controller');
const likeController = require('../controllers/like-controller');
const reportController = require('../controllers/report-controller');

const router = express.Router();

// 유효 토큰 검증 미들웨어
// router.use(verifyToken);

// ---- 좋아요 ----

// GET => api/posts/:pid/like 게시글에서 좋아요 버튼을 눌렀을 때
router.get('/posts/:pid/like', likeController.likeCounter);
// GET => api/like 내가 좋아요 한 글
router.get('/like', likeController.myLikeList);

// ---- 신고 ----

// GET => api/posts/:pid/report
router.get('/:pid/report', reportController.report);

// ---- 자격증 ----

// GET => api/license 자격증 목록
router.get('/license', licenseController.licenseList);

// POST => api/license 자격증 알림신청 버튼을 눌렀을 때
router.post('/license', licenseController.applyForNotification);

// ---- 쪽지 ----

// POST => api/note 쪽지 보내기
router.post('/note', noteController.sendNote);

// GET => api/note/send 내가 보낸 쪽지
router.get('/note/send', noteController.sendNoteList);

// GET => api/note/receive 내가 받은 쪽지
router.get('/note/receive', noteController.receiveNoteList);

// GET => api/note/:nid 쪽지 읽음 표시
router.get('/note/:uid', noteController.readNote);

module.exports = router;
