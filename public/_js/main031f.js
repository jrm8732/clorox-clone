// Status Indication

// Status Indication

var statusIndication = function() {
	var pathName = window.location.pathname;
	var pathArray = pathName.split('/');
	var arrayLength = pathArray.length;
	var href = pathArray[arrayLength-1];
	var directory = pathArray[arrayLength-2];

	$('.header__nav a').each(function() {
		anchor = $(this).attr('href');
		anchorArray = anchor.split('/');
		lengthArray = anchorArray.length;
		folder = anchorArray[lengthArray-1];
		folderUpOne = anchorArray[lengthArray-2];

		if (folderUpOne === directory) {
			$(this).addClass('active');
		}
	});

	$('.secondaryNav a').each(function() {
		anchor = $(this).attr('href');
		anchorArray = anchor.split('/');
		lengthArray = anchorArray.length;
		folder = anchorArray[lengthArray-1];
		folderUpOne = anchorArray[lengthArray-2];
		page = anchorArray[lengthArray];

		if (href === folder && folderUpOne === directory) {
			$(this).addClass('active2');
		}
	});

	$('.subNav__items a').each(function() {
		anchor = $(this).attr('href');
		anchorArray = anchor.split('/');
		lengthArray = anchorArray.length;
		folder = anchorArray[lengthArray-1];
		folderUpOne = anchorArray[lengthArray-2];
		page = anchorArray[lengthArray];

		console.log(folder);

		if (href === folder) {
			$(this).parent().addClass('active');
		}
	});
}
statusIndication();

// Toggle Nav

var headerNav = function(){
	$('.header__hamburger').on('click', function(){
		$('.headerResources').slideUp();
		$('.downloads').slideUp();
		$('.headerSearch').slideUp();

		var w = $(window).width();

		var active = $('.mainNav').hasClass('active');
		TweenMax.killTweensOf('.mainNav__box');

		if(active) {
			$('.mainNav').removeClass('active');
			$('.header__hamburger__bars').removeClass('active');
			var timeline = new TimelineMax({});
				timeline.staggerTo('.mainNav__box',0.3,{scale:0,transformOrigin:'center center'},-0.1);

			$('body').removeClass('navActive');
		} else {
			$('.mainNav').addClass('active');
			$('.header__hamburger__bars').addClass('active');
			var timeline = new TimelineMax({});
				timeline.staggerTo('.mainNav__box',0.3,{scale:1,transformOrigin:'center center'},0.1);
			
			$('body').addClass('navActive');
		}
	})

	$('.header__links__search').on('click', function(e){
		e.preventDefault();
		$('.navWrapper').slideUp();
		$('.headerResources').slideUp();
		$('.downloads').slideUp();

		$('.headerSearch').slideToggle();
		TweenMax.set('.mainNav__box',{scale:0});
		$('.mainNav').removeClass('active');
		$('.header__hamburger__bars').removeClass('active');
		$('.headerSearch__input').focus();

		if ($('.headerResources').attr('style') === "display: block;") {
			$('.headerResources').slideUp();
		}
	})

	$('.header__links__resources').on('click', function(e){
		e.preventDefault();
		$('.navWrapper').slideUp();
		$('.downloads').slideUp();

		$('.headerResources').slideToggle();
		TweenMax.set('.mainNav__box',{scale:0});
		$('.mainNav').removeClass('active');
		$('.header__hamburger__bars').removeClass('active');

		if ($('.headerSearch').attr('style') === "display: block;") {
			$('.headerSearch').slideUp();
		}
	})

	$('.headerSearch__del').on('click', function(){
		$('.headerSearch__input').val('');
	})

	$('.header__links__download').on('click', function(e){
		e.preventDefault();
		$('.navWrapper').slideUp();
		$('.headerResources').slideUp();
		$('.downloads').slideToggle();
		TweenMax.set('.mainNav__box',{scale:0});
		$('.mainNav').removeClass('active');
		$('.header__hamburger__bars').removeClass('active');

		if ($('.headerSearch').attr('style') === "display: block;") {
			$('.headerSearch').slideUp();
		}
	})
}
headerNav();

// Strategy Landing Tweens

var strategyLanding = {
	init: function(){
		var check = $('body').hasClass('strategyLanding');

		if (check) {
			var w = $(window).width();
			if ( w > 767 ) {
				strategyLanding.tweens();
			}
		}
	},
	tweens: function(){
		var controller = new ScrollMagic.Controller({});

		var statTweens = new TimelineMax({});

		statTweens.staggerFrom('.strategyAspirations__stat', 1, {autoAlpha: 0}, 1);

		var statsScene = new ScrollMagic.Scene({
			triggerElement: '.strategyAspirations__stat',
			triggerHook: 'onCenter',
			reverse: false
		})
		.setTween(statTweens)
		.addTo(controller);

		var iconTweens = new TimelineMax({});

		iconTweens.from('.strategyModel__icon path', 3, {drawSVG: 0})
				.from('.strategyModel__icon circle', 1, { autoAlpha: 0 }, "-=3");

		var iconScene = new ScrollMagic.Scene({
			triggerElement: '.strategyModel__wrapper',
			triggerHook: 'onCenter',
			reverse: false
		})
		.setTween(iconTweens)
		.addTo(controller);
	}
};
strategyLanding.init();



// functions for each individual chart

// STRATEGY 1
var strat1chart1 = function() {
	var controller = new ScrollMagic.Controller({});

	var timeline = new TimelineMax({});
		timeline.staggerTo('.peopleChart--1 .bar',0.3,{scaleY:1,transformOrigin:'bottom center',ease:Back.easeOut.config(1.7)},0.2)
				.to('.peopleChart--1 .text',0.5,{opacity:1});

	var scene = new ScrollMagic.Scene({triggerElement:'.peopleChart--1',triggerHook:'onEnter', offset: 270, reverse: false})
						.setTween(timeline)
						.addTo(controller);
}

var strat1chart2 = function() {
	var controller = new ScrollMagic.Controller({});

	var timeline = new TimelineMax({});
		timeline.staggerTo('.peopleChart--2 .bar',0.3,{scaleY:1,transformOrigin:'bottom center',ease:Back.easeOut.config(1.7)},0.2)
				.to('.peopleChart--2 .text',0.5,{opacity:1});

	var scene = new ScrollMagic.Scene({triggerElement:'.peopleChart--2',triggerHook:'onEnter', offset: 270, reverse: false})
						.setTween(timeline)
						.addTo(controller);
}

// STRATEGY 2	

var strat2chart = function (){
	var controller = new ScrollMagic.Controller({});

	var timeline = new TimelineMax({});
		timeline.staggerTo('.valueChart .bar',0.3,{scaleX:1,transformOrigin:'left center',ease:Back.easeOut.config(1.7)},0.2)
				.to('.valueChart path, .valueChart line, .valueChart polygon',0.5,{opacity:1});

	var scene = new ScrollMagic.Scene({triggerElement:'.valueChart',triggerHook:'onEnter', offset: 600, reverse: false})
						.setTween(timeline)
						.addTo(controller);
}

$('.progressTab').on('click',function(){
	var active = $(this).hasClass('active');
	var tab = $(this).attr('data-tab');

	if(active) {
		$(this).removeClass('active');
		TweenMax.to('.progressContent',0.4,{x:'-100%'});
		TweenMax.to('.progressTab .arrow',0.4,{scaleX:1});
		TweenMax.to('.stratScreen',0.3,{autoAlpha:0});
	} else {
		$(this).addClass('active');
		TweenMax.to('.progressContent',0.4,{x:'0%'});
		TweenMax.to('.progressTab .arrow',0.4,{scaleX:-1});
		TweenMax.to('.stratScreen',0.3,{autoAlpha:0.9});
	}

	if(tab == '1' && !active) {
		TweenMax.set('.peopleChart .bar',{scaleY:0,transformOrigin:'bottom center'});
		TweenMax.set('.peopleChart .text',{opacity:0});
		
		strat1chart1();
		strat1chart2();
	}

	if(tab == '2' && !active) {
		TweenMax.set('.valueChart .bar',{scaleX:0,transformOrigin:'left center'});
		TweenMax.set('.valueChart path, .valueChart line, .valueChart polygon',{opacity:0});

		strat2chart();
	}
});

// loading animations on strategy pages

var strategy = function() {
	var controller = new ScrollMagic.Controller({});
	
	// ON LOAD
	var loadTL = new TimelineMax({});
		loadTL.to('.hero img',1,{x:'0%',opacity:1})
			  .to('.sectionBox',0.4,{y:'0%'},"-=0.6")
			  .to('.pageTitle',0.4,{opacity:1},"-=0.4");

	var fade = function(el) {
		var scene = new ScrollMagic.Scene({triggerElement:el,triggerHook:'onEnter',offset:100,reverse:false})
						.setTween(el,0.5,{opacity:1,y:0,x:0})
						.addTo(controller);
	}

	$('.fade').each(function(){
		var el = $(this);
		
		fade(el);
	});

	
}

// Strategy 4 Tabs in pullout

// strat 4 charts


var strategy4Tabs = {
	init: function(){
		var check = $('.strategyGrowth').length;

		if (check > 0) {
			strategy4Tabs.toggleTabs();
		}
	},
	toggleTabs: function(){
		$('.progressContent--4__nav li').on('click', function(){
			var $this = $(this);
			var tab = $(this).attr('data-tab');

			if (!$this.hasClass('active')) {
				var dataTab = $this.attr('data-tab');
				var $targetTab = $('.progressContent--4__tab--' + dataTab);
				console.log($targetTab);

				$('.progressContent--4__nav li, .progressContent--4__tab').removeClass('active');
				$this.addClass('active');
				$targetTab.addClass('active');
			}

			if ( tab == '2' && $this.hasClass('active')) {
				TweenMax.set('.growthChart--1 .bar',{scaleY:0,transformOrigin:'top center'});
				TweenMax.set('.growthChart--1 path, .growthChart--1 polygon, .growthChart--1 line',{opacity:0});

				var controller = new ScrollMagic.Controller({});

				var timeline = new TimelineMax({});
					timeline.staggerTo('.growthChart--1 .bar',0.3,{scaleY:1,transformOrigin:'top center',ease:Back.easeOut.config(1.7)},0.2)
							.to('.growthChart--1 path, .growthChart--1 polygon, .growthChart--1 line',0.5,{opacity:1});
			
				var scene = new ScrollMagic.Scene({triggerElement:'.growthChart--1',triggerHook:'onEnter', offset: 190, reverse: false})
									.setTween(timeline)
									.addTo(controller);
			}

			if ( tab == '3' && $this.hasClass('active')) {
				TweenMax.set('.growthChart--2 .bar',{scaleY:0,transformOrigin:'top center'});
				TweenMax.set('.growthChart--2 path, .growthChart--2 polygon, .growthChart--2 line',{opacity:0});

				var controller = new ScrollMagic.Controller({});

				var timeline = new TimelineMax({});
					timeline.staggerTo('.growthChart--2 .bar',0.3,{scaleY:1,transformOrigin:'top center',ease:Back.easeOut.config(1.7)},0.2)
							.to('.growthChart--2 path, .growthChart--2 polygon, .growthChart--2 line',0.5,{opacity:1});
			
				var scene = new ScrollMagic.Scene({triggerElement:'.growthChart--2',triggerHook:'onEnter', offset: 190, reverse: false})
									.setTween(timeline)
									.addTo(controller);
			}

			if ( tab == '4' && $this.hasClass('active')) {
				TweenMax.set('.growthChart--3 .mask',{strokeDasharray:850,strokeDashoffset:0});
				TweenMax.set('.growthChart--3 .text',{opacity:0});

				TweenMax.set('.growthChart--4 .bar',{scaleY:0,transformOrigin:'top center'});
				TweenMax.set('.growthChart--4 path, .growthChart--4 polygon, .growthChart--4 line',{opacity:0});

				var controller = new ScrollMagic.Controller({});

				var timeline = new TimelineMax({});
					timeline.staggerTo('.growthChart--4 .bar',0.3,{scaleY:1,transformOrigin:'top center',ease:Back.easeOut.config(1.7)},0.2)
							.to('.growthChart--4 path, .growthChart--4 polygon, .growthChart--4 line',0.5,{opacity:1});
			
				var scene = new ScrollMagic.Scene({triggerElement:'.growthChart--4',triggerHook:'onEnter', offset: 200, reverse: false})
									.setTween(timeline)
									.addTo(controller);

				var timeline2 = new TimelineMax({});
					timeline2.to('.growthChart--3 .mask',0.5,{strokeDashoffset:850})
							 .to('.growthChart--3 .text',0.5,{opacity:1},"-=0.2");
			
				var scene2 = new ScrollMagic.Scene({triggerElement:'.growthChart--3',triggerHook:'onEnter', offset: 300, reverse: false})
									.setTween(timeline2)
									.addTo(controller);
			}

			if ( tab == '5' && $this.hasClass('active')) {
				TweenMax.set('.growthChart--5 .bar',{scaleY:0,transformOrigin:'top center'});
				TweenMax.set('.growthChart--5 path, .growthChart--5 polygon, .growthChart--5 line',{opacity:0});

				var controller = new ScrollMagic.Controller({});

				var timeline = new TimelineMax({});
					timeline.staggerTo('.growthChart--5 .bar',0.3,{scaleY:1,transformOrigin:'top center',ease:Back.easeOut.config(1.7)},0.2)
							.to('.growthChart--5 path, .growthChart--5 polygon, .growthChart--5 line',0.5,{opacity:1});
			
				var scene = new ScrollMagic.Scene({triggerElement:'.growthChart--5',triggerHook:'onEnter', offset: 190, reverse: false})
									.setTween(timeline)
									.addTo(controller);
			}
		})
	}
};
strategy4Tabs.init();

// Brand Recognitions Accordion

var brandRecognitions = {
	init: function(){
		var check = $('.brandRecognitions').length;

		if (check > 0) {
			brandRecognitions.accordion();
		}
	},
	accordion: function(){
		$('.recogsAccordion').on('click', function(){
			var $this = $(this);
			var $notThis = $('.recogsAccordion').not($this);

			if ($this.hasClass('active')) {
				TweenMax.to($this, 1, { className: "-=active" });
			} else {
				TweenMax.to($notThis, 1, { className: "-=active" });
				TweenMax.to($this, 1, { className: "+=active" });
			}
		})
	}
};
brandRecognitions.init();

var recogs = function() {
	$('.homeWrapper').imagesLoaded().done(function(instance){
		$(window).on('resize',function(){
			$('.recogsLineMobile').height('auto');
			console.log('test');
			$('.recogs__wrapper').each(function(){
				var height = 0;
				var currentRow = $(this);
				$(this).find('.recogs').each(function(){
					$this = $(this);
					if ($this.outerHeight() > height){
						height = $this.height();
					}
		
				}).promise().done(function(){
					currentRow.find('.recogsLineMobile').height(height);
				});
			});
		}).resize();
	});
}

var url = location.href;

var social = {
	links: '<li><a href="https://www.facebook.com/sharer/sharer.php?u='+url+'" class="facebook" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li><li><a href="https://twitter.com/home?status=Clorox%202018%20IAR%20-%20'+url+'" class="twitter" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true&url='+url+'&title=Clorox%202018%20IAR&summary=Clorox%202018%20Integrated%20Annual%20Report&source=" class="email" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>',

	load: function(){
		$('.facebook').html('<a href="https://www.facebook.com/sharer/sharer.php?u='+url+'" class="facebook" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>');
		$('.twitter').html('<a href="https://twitter.com/home?status=Clorox%202018%20IAR%20-%20'+url+'" class="twitter" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a>');
		$('.linkedIn').html('<a href="https://www.linkedin.com/shareArticle?mini=true&url='+url+'&title=Clorox%202018%20IAR&summary=Clorox%202018%20Integrated%20Annual%20Report&source=?v2" class="email" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>');
	}
}

social.load();

var financials = function() {
	var hash = window.location.hash;

	if(hash == '#review') {
		$('.recogsAccordion').removeClass('active');
		$('.recogsAccordion--7').addClass('active');
	} else if (hash === '#condensed') {
		$('.recogsAccordion').removeClass('active');
		$('.recogsAccordion--6').addClass('active');
	}
}

var board = function() {
	var controller = new ScrollMagic.Controller({});
	
	var fade = function(el) {
		var scene = new ScrollMagic.Scene({triggerElement:el,triggerHook:'onEnter',offset:100,reverse:false})
						.setTween(el,0.5,{opacity:1,y:0,x:0})
						.addTo(controller);
	}

	$('.fade').each(function(){
		var el = $(this);
		
		fade(el);
	});
}

// MOBILE THING

$(window).on('resize',function(){
	var w = $(window).width();

	if( w < 1024) {
		$('.spaceReplace').replaceWith(' ');
	}

	// mobile gri

	if ( w < 768) {
		$('.griSubSection__heading').each(function(){
			var h = $(this).outerHeight();
			$(this).parent().height(h);
		});
	}
}).resize();

// GRI FUNCTIONALITY

$('.griTable td:first-child').on('click',function() {
	var w = $(window).width();

	if ( w < 768 ) {
		$(this).parent().toggleClass('active');
	}
});

$('.griSection__heading').on('click',function(){
	var parent = $(this).parent();
	parent.toggleClass('active');
});

$('.griSubSection__heading').on('click',function(){
	var parent = $(this).parent();
	parent.toggleClass('active');
});

// CEO Letter Stats

var ceoStats = {
	init: function(){
		var check = $('.ceoLetter').length > 0;

		if (check) {
			ceoStats.animate();
		}
	},
	animate: function(){
		var ceoController = new ScrollMagic.Controller({});

		var ceoStatsTl = new TimelineMax({});

		ceoStatsTl.staggerTo('.letterStat',0.5,{y:'0%'},0.25);

		var scene = new ScrollMagic.Scene({
			triggerElement: '.letterStat__wrapper',
			triggerHook: 'onCenter'
		})
		.setTween(ceoStatsTl)
		.addTo(ceoController);
	}
};
ceoStats.init();

// Innovation Page

var innovationPage = {
	init: function(){
		if ($('body').hasClass('innovation')) {

			if ( $(window).width() > 1023) {
				innovationPage.introTween();
				innovationPage.productHover();
			}
			
			if (typeof window.orientation == "undefined") {
				$(window).on('resize', function(){
					location.reload();
				})
			} else {
				$(window).on('orientationchange', function(){
					location.reload();
				});

				$('.tapMobile').replaceWith('Tap');
			}
		}
	},
	introTween: function(){
		TweenMax.set('.innovationImage', { scale: 0.75, y: '100%', transformOrigin: 'center bottom' });

		var innovationIntroTl = new TimelineMax({});

		innovationIntroTl.staggerFrom('.shelf', 1, { x: '1000%' },0.25)
						.staggerTo('.innovationImage', 0.5, { y: '0%' },0.25);
		
	},
	productHover: function(){
		TweenMax.set('.innovationHover', {scale: 0, transformOrigin: 'center center'});
		
		if (window.navigator.pointerEnabled && navigator.maxTouchPoints > 1) {
			$('.innovationIntroCopy p').text('Click on a product to learn more.');

			$('.innovationImage--product').on('click', function(){
				var $this = $(this);
				var $targetCircle = $this.next('.innovationHover');
				
				TweenMax.to('.innovationImage--product', 0.25, { scale: 0.75 });
				TweenMax.to('.innovationHover', 0.25, { scale: 0 });
				TweenMax.to($this, 0.25, { scale: 1, transformOrigin: 'center bottom' });
				TweenMax.to($targetCircle, 0.25, { scale: 1 });
			})
		} else {

			$('.innovationImage--product').on('mouseenter', function(){
				var $this = $(this);
				var $targetCircle = $this.next('.innovationHover');

				TweenMax.to($this, 0.25, { scale: 1, transformOrigin: 'center bottom' });
				TweenMax.to($targetCircle, 0.25, { scale: 1 });
			})

			$('.innovationImage').on('mouseleave', function(){

				TweenMax.to('.innovationImage--product', 0.25, { scale: 0.75 });
				TweenMax.to('.innovationHover', 0.25, { scale: 0 });
			})
		}
	}
};
innovationPage.init();

function detectIE() {
	var ua = window.navigator.userAgent;
  
	// Test values; Uncomment to check result …
  
	// IE 10
	// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
	
	// IE 11
	// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
	
	// Edge 12 (Spartan)
	// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
	
	// Edge 13
	// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
  
	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
	  // IE 10 or older => return version number
	  return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}
  
	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
	  // IE 11 => return version number
	  var rv = ua.indexOf('rv:');
	  return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}
  
	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
	  // Edge (IE 12+) => return version number
	  return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}
  
	// other browser
	return false;
}

// Committee Hover for Microsoft Surface 

var committeeHover = {
	init: function(){

		if ($('body').hasClass('committee') && $('body').hasClass('surface')) {
			committeeHover.circleClick();
		}
	},
	circleClick: function(){
		$('.committeeWrap').removeClass('notSurface');

		$('.committeeHover').on('click', function(){
			var $targetName = $(this).find('span');
			var $otherNames = $('.committeeHover span').not($targetName);
			
			TweenMax.set($targetName, { autoAlpha: 1 });
			TweenMax.set($otherNames, { autoAlpha: 0 });
		})
	}
};
committeeHover.init();

var IEStyles = function (){
	var version = detectIE();

	if ( version !== false ) {
		$('body').addClass('ie');
		ie = true;
	}
};
IEStyles();

var microsoftSurface = function(){
	if (window.navigator.pointerEnabled && navigator.maxTouchPoints > 1) {
		$('body').addClass('surface')
	}
}
microsoftSurface();