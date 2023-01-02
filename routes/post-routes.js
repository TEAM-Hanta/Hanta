const express = require('express');

const postController = require('../controllers/post-controller');

const router = express.Router();

// GET => api/posts/
router.get('/', postController.getPosts);

// POST => api/posts/
router.post('/', postController.createPost);

// GET => api/posts/:pid
router.get('/:pid', postController.getPost);

// DELETE => api/posts/:pid
router.delete('/:pid', postController.deletePost);

module.exports = router;
