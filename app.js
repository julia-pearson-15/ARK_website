var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');

app.use(bodyParser());

var db;
// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectId;
// var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/ark_dev';
// MongoClient.connect(mongoUrl, function(err, database) {
//   if (err) { throw err;}
//   db = database;
//   process.on('exit', db.close);
// });

app.get('/', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 3000);