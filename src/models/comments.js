const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    docModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    commentable: {
        refPath: 'docModel',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;