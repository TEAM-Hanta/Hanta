const express = require('express');

const verifyToken = require('../middleware/verify-token');
const noteController = require('../controllers/note-controller');
const licenseController = require('../controllers/license_controller');

const router = express.Router();

// ---- 자격증 ----
// GET => api/license 자격증 목록
router.get('/license', verifyToken, licenseController.licenseList);

// POST => api/license 자격증 알림신청 버튼을 눌렀을 때
router.post('/license', verifyToken, licenseController.applyForNotification);

// ---- 쪽지 ----

// POST => api/note 쪽지 보내기
router.post('/note', verifyToken, noteController.sendNote);

// GET => api/note/send 내가 보낸 쪽지
router.get('/note/send', verifyToken, noteController.sendNoteList);

// GET => api/note/receive 내가 받은 쪽지
router.get('/note/receive', verifyToken, noteController.receiveNoteList);

// GET => api/note/:nid 쪽지 읽음 표시
router.get('/note/:uid', verifyToken, noteController.readNote);

module.exports = router;
