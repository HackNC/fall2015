$(document).ready(function () {
});

$('header > .jumbotron .container').css('margin-top', $('nav').height());

$('header > .jumbotron').css('height', $(window).height());

$(window).on('resize', function() {
/* 	$('header > .jumbotron').css('height', $(window).height()); */
});

var faqHeight = Math.max.apply(null, $('#faq .panel').map(function() {
	return $(this).height();
}).get());
console.log(faqHeight);

$('#faq .panel').css('height', faqHeight);