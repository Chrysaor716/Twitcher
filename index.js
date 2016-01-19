var express = require('express'),
    http = require('http'),
    path = require('path');

//var TwitchClient = require("node-twitchtv");
//
//	Integrate Twitch
//var account = require("../secrets/user.json");
//var client = new TwitchClient(account);
//
//client.games({limit: 20, offset: 21}, function(err, response) {
//	console.log(games);
//});
//
////	Retrieve a user's information
//client.users({user: "TorchedMuffinz"}, function(err, response) {
//	console.log(user.name); // User information
//});
//
////	Retrieve a channel's information
//client.channels({channel: "Torchedmuffinz"}, function(err, response) {
//	console.log(channel.info); // Channel info/description
//});
//
////	Retrieve a stream's information
//client.streams({channel: "Torchedmuffinz"}, function(err, response) {
//
//});

var app = express(); // Create an instance of express

app.get('/', function(req, res) {
	res.send('GET request to the homepage');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
})
