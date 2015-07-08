$(document).ready(function () {
});

var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var faqHeight = Math.max.apply(null, $('#faq .panel').map(function() {
    return $(this).height();
  }).get());
	$('#faq .panel').css('height', faqHeight);
};

var headerHeight = function () {
  var height = $(window).height() - $('nav').height();
  $('header > .jumbotron').css('height', height);
};

var navOffset = function () {
  $('body').css('margin-top', $('nav').height());
};

$(window).on('resize', function() {
	faqHeight();
});

faqHeight();
headerHeight();
navOffset();