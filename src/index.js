const express = require('express');

const connect = require('./config/database');

const app = express();
const PORT = 3000;

const startServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        await connect(); // for connecting to mongodb
    });
}

startServer();