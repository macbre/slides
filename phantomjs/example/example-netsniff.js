var page = require('webpage').create(),
	url = "http://akai.org.pl",
	requests = 0;

// żądanie HTTP zostało wysłane
page.onResourceRequested = function (request) {
	console.log('Request ' + JSON.stringify(request, undefined, 4));
};

// otrzymano odpowiedź od serwera HTTP
page.onResourceReceived = function (response) {
	console.log('Receive ' + JSON.stringify(response, undefined, 4));
	requests++; // zliczajmy wszystkie zapytania HTTP
};

page.open(url, function (status) {
	console.log("Number of request: " + requests);
	phantom.exit(); // niech skrypt się zakończy :)
});