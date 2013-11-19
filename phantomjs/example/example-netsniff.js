#!/usr/bin/env phantomjs
var page = require('webpage').create(),
	url = "http://akai.org.pl",
	requests = 0;

// żądanie HTTP zostało wysłane
page.onResourceRequested = function (request) {
	console.log('Request sent:\n' + JSON.stringify(request, undefined, 4));
	requests++; // zliczajmy wszystkie zapytania HTTP
};

// otrzymano odpowiedź od serwera HTTP
page.onResourceReceived = function (response) {
	console.log('Received:\n' + JSON.stringify(response, undefined, 4));
};

page.open(url, function (status) {
	console.log("Number of request: " + requests);
	phantom.exit(); // niech skrypt się zakończy :)
});
