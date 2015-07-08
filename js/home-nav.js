var navOffset = function () {
  $('#content.container').css('margin-top', $('#nav').height() * 0.25);
};

navOffset();

$(window).on('resize', function () {
  navOffset();
});
