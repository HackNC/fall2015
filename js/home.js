var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var faqHeight = Math.max.apply(null, $('#faq .panel').map(function() {
    return $(this).height();
  }).get());
	$('#faq .panel').css('height', faqHeight);
};

var affixNav = function() {
	$('#nav').affix({
		offset: {
			top: $('header').height()
		}
	});
	$('#nav-wrapper').css('height', $('#nav').height());
};

$(window).on('resize', function() {
	faqHeight();
	$('#nav').affix('checkPosition');
});

faqHeight();
affixNav();