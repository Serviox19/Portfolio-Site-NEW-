
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;



//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


// Create all routes
app.get('/', function (req, res) {
  res.render()
});

app.get('/blog', function (req, res) {
  res.render()
});

app.get('/projects', function (req, res) {
  res.render()
});









// PORT Listen
app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
