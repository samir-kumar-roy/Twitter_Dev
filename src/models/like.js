const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    docModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'docModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;