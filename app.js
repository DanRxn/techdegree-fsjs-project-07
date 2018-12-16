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

// Make project data available as a local variable
app.locals.projects = data.projects;

// Routes

app.get('/', function (req, res) {
  res.send('Home page!')
});

app.get('/about', function (req, res) {
  res.send('About page!')
});

app.get('/projects/:projectId', function (req, res) {
	const project = req.app.locals.projects[req.params.projectId];
	res.send(`
		<h1>Project ${req.params.projectId}! </h1>
		Project ID: ${project.id} <br>
		Descriptoin: ${project.description}
	`)
});








// 🤔 From the help doc's Hello World example
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


