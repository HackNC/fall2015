$(document).ready(function () {
});

var numSlides = 17;
var slides = [];
for (var i = 0; i < numSlides; i++) {
    slides[i] = 'images/backgrounds/bg (' + i + ').jpg';
}

$.backstretch(slides, {duration: 3333, fade: 666});