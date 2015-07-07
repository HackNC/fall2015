$(document).ready(function () {
});

var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var faqHeight = Math.max.apply(null, $('#faq .panel').map(function() {
	return $(this).height();
}).get());

	$('#faq .panel').css('height', faqHeight);
};

$('header > .jumbotron .container').css('margin-top', $('nav').height());

$('header > .jumbotron').css('height', $(window).height());

$(window).on('resize', function() {
	faqHeight();
});


faqHeight();