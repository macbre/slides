var page = require('webpage').create(),
url = "http://akai.org.pl";

page.open(url, function (status) {
	console.log(url + " loaded");

	// screenshot do pliku
	page.render("akai.png");

	// zakończ skrypt
	phantom.exit();
});
