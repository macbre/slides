var page = require('webpage').create(),
	url = "http://html5test.com/";

page.open(url, function (status) {
	page.render('html5-test.png');
	phantom.exit();
});

