// Dependencies
const express = require('express');
const router = express.Router();
// Controller
const postController = require('./../controllers/postController.js')
// Routes
router
    .route('/')
    .get(postController.getPosts)
    .post(postController.createPost);
router
    .route('/:slug')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(postController.deletePost)
module.exports = router;