var page = require('webpage').create(),
	url = "http://akai.org.pl";

page.onConsoleMessage = function(msg) {
	console.log('LOG: ' + msg);
};

page.onError = function(msg, trace) {
	console.log('ERROR: ' + msg);
	trace.forEach(function(item) {
		console.log('  ', item.file, ':', item.line);
	});
};

page.open(url, function (status) {
	phantom.exit();
});