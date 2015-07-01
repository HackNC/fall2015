var numSlides = 24;
var slides = [];
var captions = [];
for (var i = 0; i < numSlides; i++) {
	slides[i] = 'images/bg (' + i + ').jpg';
	captions[i] = 'test_caption: ' + i;
}

$.backstretch(slides, {duration: 3333, fade: 666});

$('#caption-btn').on('click', function() {
	$('#caption').fadeToggle();
});

$(window).on('backstretch.show', function(e, instance) {
  var caption = captions[instance.index];
  $('#caption').html('<a href="' + slides[instance.index] + '">' + caption +  '</a><div class="ripple-wrapper"></div>');
});