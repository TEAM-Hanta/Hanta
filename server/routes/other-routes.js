const express = require('express');

const verifyToken = require('../middleware/verify-token');
const noteController = require('../controllers/note-controller');
const likeController = require('../controllers/like-controller');
const replyController = require('../controllers/reply-controller');
const scrapController = require('../controllers/scrap-controller');
const reportController = require('../controllers/report-controller');
const licenseController = require('../controllers/license_controller');

const router = express.Router();

// 유효 토큰 검증 미들웨어
// router.use(verifyToken);

// ---- 좋아요 ----

// GET => api/posts/:pid/like 게시글에서 좋아요 버튼을 눌렀을 때
router.get('/posts/:pid/like', likeController.saveLike);

// GET => api/like 내가 좋아요 한 글
router.get('/like', likeController.myLikeList);

// ---- 스크랩 ----

// POST => api/posts/:pid/scrap 게시글에서 스크랩 버튼을 눌렀을 때
router.post('/posts/:pid/scrap', scrapController.saveScrap);

// GET => api/scrap 내가 스크랩 한 글
router.get('/scrap', scrapController.myScrapList);

// ---- 신고 ----

// POST => api/posts/:pid/report 게시글 신고 버튼 눌렀을 때
router.post('/posts/:pid/report', reportController.report);

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

// ---- 알림 ----
// GET => api/notice 자격증 알림 출력
router.get('/notice/license', licenseController.todayLicenseList);

// GET => api/notice/reply 댓글 알림 출력
router.get('/notice/reply', replyController.replyNoticeList);

module.exports = router;
