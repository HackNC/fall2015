var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var faqHeight = Math.max.apply(null, $('#faq .panel').map(function() {
    return $(this).height();
  }).get());
	$('#faq .panel').css('height', faqHeight);
};

$(window).on('resize', function() {
	faqHeight();
});

faqHeight();
