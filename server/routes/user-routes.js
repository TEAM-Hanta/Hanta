const express = require('express');
const { body } = require('express-validator');

const userController = require('../controllers/user-controller');
const verifyToken = require('../middleware/verify-token');

const router = express.Router();

// POST => api/signup 회원가입 - id는 숫자만 (학번), 비밀번호는 6자 이상
router.post('/signup', [body('id').isInt(), body('password').isLength({ min: 6 }), body('major').not().isEmpty(), body('nickname').not().isEmpty()], userController.signup);

// POST => api/login 로그인
router.post('/login', userController.login);

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
