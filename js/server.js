// Variables
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

// Use JS and CSS
app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use("/images", express.static("images"));


//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


// Create all routes
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/home.html')
});

app.get('/blog', function (req, res) {
  res.sendFile(process.cwd() + '/views/blog.html')
});

app.get('/projects', function (req, res) {
  res.sendFile(process.cwd() + '/views/projects.html')
});


//







// PORT Listen
app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
