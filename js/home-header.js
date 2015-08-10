var fullHeight = function () {
  var height = $(window).height() - $('nav').height();
  var $fullHeighters = $('.full-height');
  $fullHeighters.css('height', height);
};

fullHeight();
