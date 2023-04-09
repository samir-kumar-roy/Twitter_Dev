const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./config/database');
const apiRoutes = require('./routes/index');
// const UserRepository = require('./repository/user-repository');
// const TweetRepository = require('./repository/tweet-repository');
// const LikeService = require('./services/like-service');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
const startServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        await connect(); // for connecting to mongodb

        /* const userRepository = new UserRepository();
        const tweetRepo = new TweetRepository();
        const tweet = await tweetRepo.getAll(0, 10);
        const user = await userRepository.getAll();

        const likeService = new LikeService();
        await likeService.toggleLike(tweet[0].id, 'Tweet', user[0].id); */

    });
}

startServer();