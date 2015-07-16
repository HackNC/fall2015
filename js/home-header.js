var fullHeight = function () {
  var height = $(window).height() - $('nav').height();
  var $fullHeighters = $('.full-height > .jumbotron');
  $fullHeighters.css('height', height);
};

fullHeight();
