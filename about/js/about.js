var numSlides = 24;
var slides = [];
for (var i = 0; i < numSlides; i++) {
    slides[i] = 'images/bg (' + i + ').jpg';
}

$.backstretch(slides, {duration: 3333, fade: 666});

$('#info-btn').on('click', function() {
	$('#info').fadeToggle();
});