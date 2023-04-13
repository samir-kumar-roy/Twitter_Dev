const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./config/database');
const apiRoutes = require('./routes/index');

const passportAuth = require('./config/jwt-middleware');
const passport = require('passport');
// const UserRepository = require('./repository/user-repository');
// const TweetRepository = require('./repository/tweet-repository');
// const LikeService = require('./services/like-service');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);
app.use('/api', apiRoutes);
const startServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        await connect(); // for connecting to mongodb

    });
}

startServer();