const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweets can not be more than 250 characters']
    }
}, { timestamps: true });



const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet; 