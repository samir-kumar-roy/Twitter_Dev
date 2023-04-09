const express = require('express');
const router = express.Router();
const { createTweet, getTweet } = require('../../controllers/tweet-controller');
const { createComment } = require('../../controllers/comment-controller');
const toggleLike = require('../../controllers/like-controller');
const { signupUser } = require('../../controllers/user-controller');

router.post('/tweets', createTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comments', createComment);
router.get('/comments/:id', getTweet);
router.post('/signup', signupUser);

module.exports = router;