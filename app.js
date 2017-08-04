//app
var express = require('express');
var path = require('path');
var app = express();

// prepare server
//app.use('/api', api); // redirect API calls
app.use('/', express.static(__dirname + '/app.html')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstra

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app.html'));
});


app.post('/add', function(req, res) {
	//
});
app.listen(4040, function () {
  //console.log('Example app listening on port 4040!')
})