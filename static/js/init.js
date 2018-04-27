/*==========================*/
/*Page preloader */
/*==========================*/

$(window).on('load', function () {
        jQuery("#page-loader").delay(500).fadeOut('slow');
        jQuery('body').css('overflowY','auto');

		$('.articles').masonry({
			itemSelector: 'article',
			percentPosition: true
		});

		$('.portfolio-wrap').masonry({
			itemSelector: '.p-item',
			percentPosition: true
		});
});
/*==========================*/

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 100,
  mobile: true,
  live: true
})
wow.init();

/*==========================*/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 325) {
        $(".info").addClass("scrolled");
    } else {
        $(".info").removeClass("scrolled");
    }
});


// $(function() {
//   $(document).scroll(function() {
//     var $info = $(".info");
//     $info.toggleClass('scrolled', $(this).scrollTop() > $info.height());
//   });
// });

(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	edge: 'right',
    });

    $('.parallax').parallax();

	$('.slider').slider({full_width: true, height: 400});

	$('.materialboxed').materialbox();

  });
})(jQuery);
