const express = require('express');

const cors = require('cors');

const hellowordRouter = require('./routes/helloword.route');

const app = express();
app.use(express.json());

app.use(cors({ origin: true }));
app.use('/hello-devlink-world', hellowordRouter);

module.exports = app;
