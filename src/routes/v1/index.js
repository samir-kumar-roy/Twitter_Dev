const express = require('express');
const router = express.Router();
const { createTweet, getTweet } = require('../../controllers/tweet-controller');
const { createComment } = require('../../controllers/comment-controller');
const toggleLike = require('../../controllers/like-controller');
const { signupUser, loginUser } = require('../../controllers/user-controller');
const authenticate = require('../../middlewares/authenticate');

router.post('/tweets', authenticate, createTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comments', createComment);
router.get('/comments/:id', getTweet);
router.post('/signup', signupUser);
router.post('/login', loginUser);

module.exports = router;