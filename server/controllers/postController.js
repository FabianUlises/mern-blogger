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
            message: 'unable to get posts',
            error: err
        });
    }
};
// Get single post route
exports.getPost = async(req, res) => {
    try {
        // Getting slug from request params
        const {slug} = req.params;
        // Getting single post from api
        const singlePost = await Post.findOne({slug});
        res.status(200).json({
            status: 'success',
            data: singlePost
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Unable to get post',
            error: err
        });
    }
};
// Create post route
exports.createPost = async(req, res) => {
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
// Update post route
exports.updatePost = async(req, res) => {
    // Getting slug from request params
    const {slug} = req.params;
    try {
        // Getting values from request
        const {title, content, user} = req.body;
        // Making sure input is not empty
        if(content === '' || title === '') {
            res.status(400).json({
                status: 'fail',
                error: 'Content and a title is required'
            });
            return;
        }
        // Creating new slug
        const newSlug = slugify(title);
        // Updating post
        const updatedPost = await Post.findOneAndUpdate({slug}, {title, content, user, slug: newSlug}, {new: true});
        res.status(200).json({
            status: 'success',
            data: updatedPost
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Unable to update post',
            error: err
        });
    }
};
// Delete post route
exports.deletePost = async(req, res) => {
    // Getting slug from request params
    const {slug} = req.params;
    try {
        // Making delete fetch request
        const deletedPost = await Post.findOneAndDelete({slug});
        res.status(200).json({
            status: 'success'
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not delete post',
            error: err
        });
    }
};