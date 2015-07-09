var navbarOffset = function () {
  $('body').css('margin-top', $('nav').height() * 1.25);
  $('body').css('margin-bottom', $('nav').height());
};

navbarOffset();
