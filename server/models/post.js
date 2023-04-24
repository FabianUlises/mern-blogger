const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        min: 3,
        max: 150,
        required: true
    },
    content: {
        type: {},
        required: true,
        min: 20,
        max: 2000000
    },
    user: {
        type: String,
        default: 'Admin'
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    }
});
module.exports = mongoose.model('Post', postSchema);