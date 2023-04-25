// Model
const Post = require('./../models/post');
// Dependencies
const mongoose = require('mongoose');
const slugify = require('slugify');
// Get all post route
exports.getPosts = async(req, res) => {
    try {
        // Gettign posts from data
        const dataPosts = await Post.find().limit(10).sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            data: dataPosts
        });
    } catch(err) {
        res.status(400).json({
            status: 'faill',
            message: 'unable to get posts'
        });
    }
};
// Get single post route
exports.getPost = async(req, res) => {
    try {
        const {slug} = req.params;
        const singlePost = await Post.findOne({slug});
        res.status(200).json({
            status: 'success',
            data: singlePost
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Unable to get post'
        });
    }
};
// Create post route
exports.create = async(req, res) => {
    try {
        // Making sure input is not empty
        if(req.body.content === '' || req.body.title === '') {
            res.status(400).json({
                status: 'fail',
                error: 'Content and a title is required'
            });
            return;
        }
        // Creating slug
        const slug = slugify(req.body.title);
        // Createing new post to db
        const newPost = await Post.create({ title: req.body.title, content: req.body.content, user: req.body.user, slug: slug });
        res.status(200).json({
            status: 'Success',
            data: newPost
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
};