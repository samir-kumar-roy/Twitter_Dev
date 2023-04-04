const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            Success: true,
            Message: "Successfully created a new tweet",
            Error: {},
            Data: response
        });
    } catch (err) {
        return res.status(500).json({
            Success: false,
            Message: "tweet creation not possible",
            Error: err,
            Data: {}
        });
    }
}

module.exports = {
    createTweet
};