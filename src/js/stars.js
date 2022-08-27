var sections = $('.anchor'),
  nav = $('nav'),
  header_height = $('.header').outerHeight();

$(window).on('wheel', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - header_height;

    if (cur_pos >= top) {
      nav.find('.header-nav-link.current').removeClass('current');

      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
    }
  });
});
