var express = require('express'),
    http = require('http'),
    path = require('path');
var Twitter = require('twitter-js-client').Twitter;

var app = express(); // Create an instance of express

/*	Callbacks	*/
var error = function(err, response, body) {
	console.log('ERROR [%s]', err);
};
var success = function(data) {
	console.log('Data [%s]', data);
};

var config = {
	"callBackUrl": ""
}

app.get('/', function(req, res) {
	res.send('\'SUP, HOMIES');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
})
