// Model
const Post = require('./../models/post');
// Dependencies
const slugify = require('slugify');
// Root get route
exports.create = async(req, res) => {
    try {
        if(req.body.content === '' || req.body.title === '') {
            res.status(400).json({
                status: 'fail',
                error: 'Content and a title is required'
            });
            return;
        }
        const slug = slugify(req.body.title);
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