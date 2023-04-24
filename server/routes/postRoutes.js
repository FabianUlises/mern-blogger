// Dependencies
const express = require('express');
const router = express.Router();
// Controller
const postController = require('./../controllers/postController.js')
// Routes
router.post('/', postController.create);
module.exports = router;