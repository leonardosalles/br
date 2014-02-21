var _scrollSpeed  = 1000,
    _slider_delay = 0;
	
window.navHeight  = jQuery("#header").height();

jQuery("a.scrollTo").bind("click", function(e) {
	e.preventDefault();

	var href = jQuery(this).attr('href');
	if(href != '#') {
		jQuery('html,body').animate({scrollTop: jQuery(href).offset().top - window.navHeight}, _scrollSpeed, 'easeInOutExpo');
	}
});

jQuery("a.toTop").bind("click", function(e) {
	e.preventDefault();
	jQuery('html,body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
});

if(jQuery().fitVids) {
	jQuery("body").fitVids();
}

if(jQuery().owlCarousel) {
	owlCarouselInit(".owl-carousel");
}

function owlCarouselInit(divClass) {
	jQuery(divClass).each(function() {
		var t 			= jQuery(this),
			navigation 	= t.attr('data-navigation'),
			singleItem 	= t.attr('data-singleitem'),
			autoPlay 	= t.attr('data-autoplay'),
			transition 	= t.attr('data-transition'),
			items 		= t.attr('data-items'),

			navigation 	= (navigation == 'true') 	? true 		: false,
			singleItem 	= (singleItem == 'true') 	? true 		: false,
			autoPlay 	= (autoPlay == 'true') 		? true 		: false;
			transition 	= (transition == 'fade') 	? 'fade' 	: false;
			items 		= (items > 0) 			? items 	: 5;

		jQuery(t).owlCarousel({
			items: 			items,
			slideSpeed: 		300,
			paginationSpeed: 	600,
			navigation: 		navigation,
			singleItem: 		singleItem,
			autoPlay:		autoPlay,
			stopOnHover: 		true,
			autoHeight: 		false,
			transitionStyle: 	transition
		});
	});
}

if(jQuery().carouFredSel) {
	jQuery('ul.services').carouFredSel({
		auto: false,
		swipe: {
			onTouch: true,
			onMouse: false
		},
		prev: '#service-prev',
		next: '#service-next',
		responsive: true,
		width: '100%',
		height: 'variable', 
		scroll: 1,
		items: {
			width: 292,
			height: 'variable',
			visible: {
				min: 1,
				max: 4
			}
		}
	});
}

jQuery('.animate_from_top').each(function () {
	jQuery(this).appear(function() {
		jQuery(this).delay(150).animate({opacity:1,top:"0px"},1000);
	});	
});

jQuery('.animate_from_bottom').each(function () {
	jQuery(this).appear(function() {
		jQuery(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
	});	
});


jQuery('.animate_from_left').each(function () {
	jQuery(this).appear(function() {
		jQuery(this).delay(150).animate({opacity:1,left:"0px"},1000);
	});	
});


jQuery('.animate_from_right').each(function () {
	jQuery(this).appear(function() {
		jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
	});	
});

jQuery('.animate_fade_in').each(function () {
	jQuery(this).appear(function() {
		jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
	});	
});

if(jQuery().appear) {
	jQuery('*').each(function() {
		if(jQuery(this).attr('data-animation')) {
			var $animationName = jQuery(this).attr('data-animation');
			jQuery(this).appear(function() {
				jQuery(this).addClass('animated').addClass($animationName);
			});
		}
	});
}

if(jQuery().backstretch && jQuery("#static-logo").length > 0) {
	var background_image = jQuery("#static-logo").attr('data-background');

	if(background_image) {
		jQuery("#slider").backstretch(background_image, {speed: 150});
		jQuery("#slider").css({"background":"none"});
	}

}

if(jQuery().videoBG && jQuery('#videoBg').length > 0) {
	jQuery('#videoBg').videoBG(videoBg);
}


if(jQuery(".full-screen").length > 0) {
	_fullscreen();

	jQuery(window).resize(function() {
		_fullscreen();
	});
}
function _fullscreen() {

	var _screenHeight = jQuery(window).height();
	jQuery(".full-screen, .full-screen ul, .full-screen li").height(_screenHeight);

}


if(jQuery("#home").length > 0) {

	window.isOnTop 		= true;
	window.homeHeight 	= jQuery("#home").height() - window.navHeight;

	jQuery(window).scroll(function() {
		if(jQuery(document).scrollTop() > window.homeHeight) {
			if(window.isOnTop === true) {
				jQuery('#header').addClass('fixed');
				window.isOnTop = false;
			}
		} else {
			if(window.isOnTop === false) {
				jQuery('#header').removeClass('fixed');
				window.isOnTop = true;
			}
		}
	});

	jQuery(window).resize(function() {
		window.homeHeight = jQuery("#home").height() - window.navHeight;
	});

}

if(navigator.userAgent.indexOf("MSIE") > 0) {
	/* ie */
} else { 
	jQuery("a.btn-fullscreen").show(); 
}

jQuery("a.btn-fullscreen").bind("click", function(e) {
	e.preventDefault();

	if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods

		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}

	} else {

		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}

	}
});

var toggle = false;


if(jQuery().mb_YTPlayer) {

	jQuery(".player").mb_YTPlayer();
	jQuery("#home").css({"background":"none"});

	jQuery("#video-volume").bind("click", function(e) {
		e.preventDefault();
		
		if (!toggle) {
		 	toggle = true;
			jQuery("#video-volume").children().attr('class', 'fa fa-volume-up');
		} else {
			toggle = false;
			jQuery("#video-volume").children().attr('class', 'fa fa-volume-off');
		}

		jQuery('#YTPlayer').toggleVolume();
	});

}

jQuery.extend( jQuery.easing,{
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
});

