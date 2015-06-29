$(document).ready(function () {
});

$('body').css('margin-top', $('nav').height());

$('header > .jumbotron').css('height', $(window).height());

$(window).on('resize', function() {
	$('header > .jumbotron').css('height', $(window).height());
});