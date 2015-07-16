var fullHeight = function () {
  var height = $(window).height() - $('nav').height();
  $('.full-height > .jumbotron').css('height', height);
  var $title = $('header #title');
  $title.css('top', height / 2);
  $title.show();
};

fullHeight();
