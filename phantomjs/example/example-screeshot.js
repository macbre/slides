var page = require('webpage').create(),
    url = "http://akai.org.pl";
	
page.open(url, function (status) {
	console.log(url + " loaded");
	page.render("akai.png");
	phantom.exit();
});
