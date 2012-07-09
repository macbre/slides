var page = require('webpage').create(),
	url = "http://akai.org.pl",
	time = Date.now();

page.open(url, function (status) {
	console.log("Loaded in " + (Date.now() - time) + " ms");
	phantom.exit();
});