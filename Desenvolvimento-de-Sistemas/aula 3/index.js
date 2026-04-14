const express = require('express');
const router = require('./router');
const app = express();

router(app);

const port = 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;