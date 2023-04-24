// Dependencies
const express = require('express');
const router = express.Router();
// Controller
const postController = require('./../controllers/postController.js')
// Routes
router.get('/all', postController.getPosts);
router.get('/:slug', postController.getPost);
router.post('/', postController.create);
module.exports = router;