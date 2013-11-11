var page = require('webpage').create(),
	url = "http://akai.org.pl";

page.open(url, function (status) {
	var title = page.evaluate(function() {
		// funkcja zostanie "uruchamiona"
		// w kontekście otwartej strony
		return document.title;
	});

	console.log("Page title: " + title);
    console.log("HTML elements: " + page.evaluate(function() {return document.getElementsByTagName('*').length}));
	phantom.exit(); // niech skrypt się zakończy :)
});