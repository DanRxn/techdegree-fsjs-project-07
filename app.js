// Require data file
const data = require('./data.json');

// Require `path` module
const path = require('path');

// Require and configure Express
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Set Pug as the view engine for Express
app.set('view engine', 'pug');


// 🤔 From the help doc's Hello World example
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


