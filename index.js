var express = require('express'),
    http = require('http'),
    path = require('path');
var Twitter = require('twitter');

var app = express(); // Create an instance of express

/*	Callbacks	*/
var error = function(err, response, body) {
	console.log('ERROR [%s]', err);
};
var success = function(data) {
	console.log('Data [%s]', data);
};

//	OAuth
var client = new Twitter({
});

client.post('statuses/update', {status: 'A dev Tweet from Node.js! #iTotallyKnowWhatImDoing #camelCaseTwitterPeeps'}, function(error, tweet, response) {
	if(error) throw error;
	console.log(tweet);	// The body of the Tweet
	console.log(response);	// The raw response object
});

app.get('/', function(req, res) {
	res.send('\'SUP, HOMIES');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
})
