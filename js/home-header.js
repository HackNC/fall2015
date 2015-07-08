var headerHeight = function () {
  var height = $(window).height() - $('nav').height();
  $('header > .jumbotron').css('height', height);
  var $title = $('header #title');
  $title.css('top', height / 2);
  $title.show();
};

headerHeight();
