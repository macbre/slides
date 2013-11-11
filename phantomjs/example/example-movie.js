var page = require('webpage').create(),
	// Another World
	url = "http://www.megidish.net/awjs/";

page.viewportSize = {width: 800, height: 400};

page.open(url, function (status) {
	var frame = 0;

	// jQuery
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
		page.evaluate(function() {
			$('p').remove();
		});
	});

	setInterval(function() {
		var t = Date.now();
		page.render('movie/movie-' + (frame <= 9 ? ('0' + frame) : frame) + '.png');
		t = Date.now() - t;

		console.log('Frame #' + frame + ' in ' + t + ' ms');

		frame++;

		if (frame > 99) {
			phantom.exit();
		}
	}, 250);
});

