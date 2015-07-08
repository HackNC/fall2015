var navOffset = function () {
  $('body').css('margin-top', $('nav').height());
};

navOffset();

$(window).on('resize', function () {
  navOffset();
});
