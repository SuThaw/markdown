// server.js
var express = require('express');
var app = express();

//set the view engine to jade
app.set('view engine','jade');

//public folder to store assets

app.use(express.static(__dirname + '/public'));

//routes for app
app.get('/',function  (req,res) {
	res.render('pad');
});

//listten to toe port 8000 or port on heroku
var port = process.env.PORT || 8000;
app.listen(port);
