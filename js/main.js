$(document).ready(function(){
	samaritanModule.start();
	speechModule.start();

	setInterval(function(){
		var image = $('<img src="http://lorempixel.com/200/200/?v=1404442966794?v=' + Math.random() + '">');
		$('body').append(image);
		image.attr('style', 'position: fixed; left: 20vw; top: 100vh; z-index: -1; box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.75);');
		image.velocity({
			top: '-20vh'
		}, 3000, [0.62,0.86,0.51,0.27], function(){
			image.remove();
		});
	}, 1500);

	setInterval(function(){
		var image = $('<img src="http://lorempixel.com/200/200/?v=1404442966794?v=' + Math.random() + '">');
		$('body').append(image);
		image.attr('style', 'position: fixed; right: 20vw; top: -20vh; z-index: -1; box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.75);');
		image.velocity({
			top: '100vh'
		}, 3000, [0.62,0.86,0.51,0.27], function(){
			image.remove();
		});
	}, 1500);

});
