// Require data file
const data = require('./data.json');

// Require `path` module
const path = require('path');

// Require and configure Express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
