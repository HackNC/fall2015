var navOffset = function () {
  $('#content.container').css('margin-top', $('#nav').height() * 0.25);
};

var collapsedMenus = function() {
	$('#nav button.navbar-toggle').on('click', function() {
		if ($(this).hasClass('collapsed')) {
			var navCollapseSize = 322.5;
			collapseOffset('#nav', navCollapseSize);
		}
	});
	
	$('#nav a#side-menu').on('click', function() {
		if ($(this).parent().hasClass('open')) {
			var menuCollapseSize = 133;
			collapseOffset('#nav', menuCollapseSize);
		}
	});
};

var collapseOffset = function(selector, size) {
	var windowHeight = $(window).height();
	if (($(selector).offset().top - $(window).scrollTop()) > (size)) {
		var dest = (size < windowHeight) ? size : windowHeight;
		$('html, body').animate({
			scrollTop: dest
		}, 500, 'swing');
	}
};

navOffset();
collapsedMenus();
$(window).on('resize', function () {
  navOffset();
});
