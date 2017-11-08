var express = require('express');
var pug = require('pug');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req,res){
  res.render('index', {
    "title": "Home"
  });
});

app.get('/:viewname', function(req,res){
  res.render(req.params.viewname, {
    "title": req.params.viewname
  });
});

app.listen(4000);