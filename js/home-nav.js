var navOffset = function () {
  $('#content.container').css('margin-top', $('#nav').height() * 0.25);
};

var collapsedMenus = function() {
	$('#nav button.navbar-toggle').on('click', function() {
		if ($(this).hasClass('collapsed') &&
		    !$($(this).data('target')).hasClass('collapsing')) {
      var collapsedMenuHeight = 323.5;
      collapseOffset('#nav', collapsedMenuHeight);
    }
  });

  $('#nav #side-menu > a').on('click', function () {
    if (!$(this).parent().hasClass('open')) {
      var collapsedSideMenuHeight;
      if ($('#nav .navbar-toggle').is(':visible')) {
        collapsedSideMenuHeight = 133 + 323.5; // What is this?
      } else {
        collapsedSideMenuHeight = 133;
      }
      collapseOffset('#nav #side-menu > a', collapsedSideMenuHeight);
		}
	});
	
	$('#nav #about-menu > a').on('click', function () {
    if (!$(this).parent().hasClass('open')) {
      var collapsedSideMenuHeight;
      if ($('#nav .navbar-toggle').is(':visible')) {
        collapsedSideMenuHeight = 160 + 323.5;
      } else {
        collapsedSideMenuHeight = 160;
      }
      collapseOffset('#nav #about-menu > a', collapsedSideMenuHeight);
		}
	});
};

var collapseOffset = function(selector, size) {
  var $window = $(window);
  var windowHeight = $window.height();
  if ($window.scrollTop() < size) {
		var dest = (size < windowHeight) ? size : windowHeight;
		$('html, body').animate({
			scrollTop: dest
		}, 500, 'swing');
	}
};

navOffset();
collapsedMenus();
