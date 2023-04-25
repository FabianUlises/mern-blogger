// Dependencies
const express = require('express');
const router = express.Router();
// Controller
const postController = require('./../controllers/postController.js')
// Routes
router.get('/', postController.getPosts);
router.get('/:slug', postController.getPost);
router.post('/', postController.create);
router.patch('/:slug/update', postController.updatePost);
router.delete('/:slug', postController.deletePost);
module.exports = router;