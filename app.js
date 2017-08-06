//app
var express = require('express');
var path = require('path');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pagediff');


var log = mongoose.model('log',
	{
		url: String,
		initial-c-length: Number,
		last-c-length: Number,
		current-c-length: Number,
		update: Boolean
	}
);


// static pages
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect CSS bootstrap

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app.html'));
});

app.post('/add', function(req, res) {
	// Adding URL to DB

	var logger = new log({ url: req.body.url, update: 0 });

	logger.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('meow');
	  }
	});
});

app.get('/notifcations', function(req, res) {
	//
});

app.get('/history', function(req, res) {
	//
});

app.listen(4040, function () {
  //console.log('Example app listening on port 4040!')
})