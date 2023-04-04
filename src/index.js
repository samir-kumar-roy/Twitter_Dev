const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./config/database');
const apiRoutes = require('./routes/index');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
const startServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        await connect(); // for connecting to mongodb
    });
}

startServer();