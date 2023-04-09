const TweetService = require('../services/tweet-service');
const TweetRepository = require('../repository/tweet-repository');

const tweetService = new TweetService();
const tweetRepository = new TweetRepository();

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

const getTweet = async (req, res) => {
    try {
        const response = await tweetRepository.getWithComments(req.params.id);
        console.log(response);
        return res.status(200).json({
            Success: true,
            Message: "tweet fetched",
            Error: {},
            Data: response
        })
    } catch (err) {
        return res.status(500).json({
            Success: false,
            Message: "tweet not fetched",
            Error: err,
            Data: {}
        });
    }
}

module.exports = {
    createTweet,
    getTweet
};