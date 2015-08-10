/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins
 */

(function($){
	$(document).ready(function(){

		//$(".banner-image").backstretch('images/banner.jpg');

		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//lazy img
        $("img[data-original]").lazyload({
		    skip_invisible : false
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					var that = this;
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 600, function(){
					        var target = $(that.hash);
					        target = target.length ? target : $('[name=' + that.hash.slice(1) +']');
					        if (target.length) {
					        	$('html,body').animate({
					        		scrollTop: target.offset().top-151
					        	}, 400, function(){


					        	});
					        	return false;
					        }

						});
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 200);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: ".2015women",
                    onLayout: function() {
                        $(window).trigger("scroll");
                    }
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		var youkuIframe = function(id) {
        	return ('<iframe height="100%" width="100%" src="http://player.youku.com/embed/' + id + '" frameborder=0 allowfullscreen></iframe>');
        };
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

		$('body .video-modal').each(function(){
		    var youkuId = $(this).attr('youkuid');
			//console.log(youkuId);
			$(this).on('show.bs.modal', function (e) {
			    $(".modal-content", this).html(youkuIframe(youkuId));
			}).on('hidden.bs.modal', function(e) {
        	    $(".modal-content", this).html("");
            });
		});
		// Owl Carousel Settings

		$("#owl-example").owlCarousel();
        $(".about-carousel").owlCarousel({
            items: 4,
			lazyLoad : true
        });

        $(".portfolio-carousel").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            autoHeight: true,
            mouseDrag: true,
            touchDrag: true,
            //transitionStyle: "fadeUp",
            loop:true,
            autoPlay:true
        });

        $(".testimonials-carousel").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: true,
            autoHeight: true,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            transitionStyle: "backSlide"
        });

        $(".portfolio-gallery").owlCarousel({
            items: 3,
        });
		(function(){
        	var my_posts = $("[rel=tooltip]");

        	var size = $(window).width();
        	for(i=0;i<my_posts.length;i++){
        		the_post = $(my_posts[i]);

        		if(the_post.hasClass('invert') && size >=767 ){
        			the_post.tooltip({ placement: 'left'});
        			the_post.css("cursor","pointer");
        		}else{
        			the_post.tooltip({ placement: 'rigth'});
        			the_post.css("cursor","pointer");
        		}
        	}
        })();

	}); // End document ready
})(this.jQuery);
