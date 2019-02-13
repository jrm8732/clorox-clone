var home = function() {
	// GLOBAL VARIABLES
	// HANDLES STUFF SUCH AS THE DISTANCE NEEDED TO SCROLL AND PAUSE DURATION BETWEEN SCROLLS

	var DISTANCE = 5;
	var BUFFER = 1000;
	var ran = true;

	var w;
	var h;

	$(window).on('resize',function(){
		w = $(window).width();
		h = $(window).height();
	}).resize();

	// FUNCTION TO PLAY TIMELINE ON DOWNWARD MOVEMENT
	var down = false;
	var up = false;

	var playTL = function(timeline) {
		if(down) {
			timeline.play(0);
		}
	}

	var resetTL = function(timeline) {
		if(up) {
			timeline.pause(0);
		}
	}

	var setStart = function() {
		ran = false;
	}

	// Function to determaine the proper x/y positions to center an element on zoom
	var getOffset = function (element, zoom) {
		var w = $(window).width();
		var h = $(window).height();
		var elW = element[0].getBoundingClientRect().width;
		var elH = element[0].getBoundingClientRect().height;

		var offset = element.offset();
		var elX = offset.left;
		var elY = offset.top;


		var origin_center_x = w / 2;
		var origin_center_y = h / 2;

		var el_center_x = elX + (elW / 2);
		var el_center_y = elY + (elH / 2);

		var distance_x = origin_center_x - el_center_x;
		var distance_y = origin_center_y - el_center_y;

		var x_off = distance_x * zoom;
		var y_off = distance_y * zoom;


		return [x_off, y_off];
	}



	// SCENE 1 SETUP
		// WRAP EACH INDIVIDUAL LETTER
		$('.textWrap').each(function (index) {
			var characters = $(this).text().split("");
			
			$this = $(this);
			$this.empty();
			$.each(characters, function (i, el) {
				if ( el !== ' ') {
					$this.append("<span class='letter'>" + el + "</span>");
				} else {
					$this.append(" ");
				}
			});
		});

		// GET OFFSET FOR LARGE TEXT TO ZOOM INTO
		var el2 = $('.scene--1__text .large .letter:first-child');
		var el2w = el2.width();
		var zoom2 = (w*7) / el2w;

		var offset2 = getOffset(el2,zoom2);

		// CALCULATE THE SCALE NEEDED FOR INITIAL ZOOM
		var el1 = $('.scene--1__product--1');
		var el1w = el1.width();
		var zoom1 = (w*0.7) / el1w
		
		// CACLULATE THE OFFSET REQUIRED
		var offset1 = getOffset(el1,zoom1);

		TweenMax.set('.scene--1__products',{scale:zoom1,x:offset1[0], transformOrigin:'top center'});


		// INITIAL TIMELINE

		var startTL = new TimelineMax({delay:1});
			startTL.to('.preloader',0.3,{autoAlpha:0})
					.to('.scene--1__products',1,{scale:1,x:0})
					.staggerTo('.scene--1__text .letter',0.5,{opacity:1,rotationY:0,scale:1,transformOrigin:'center center'},0.1)
					.to('.scene--1',0.75,{opacity:0},"+=0.5")
					.set('.scene--2',{zIndex:51})
					.staggerTo('.scene--2__product',0.5,{x:0,y:0},0.3)
					.staggerTo('.scene--2__text .letter',0.5,{opacity:1,rotationY:0,scale:1,transformOrigin:'center center'},0.1,"-=0.3")
					.to('.scroll, .surfaceClickWrapper',0.3,{y:'0%'})
					.call(setStart);


	// PRIMARY TIMELINE
	var mainTL = new TimelineMax({ paused: true });

	// ONLY RUN CODE FOR REST OF SCROLL UNTIL ALL OF THE IMAGES ARE DONE LOADING.
	$('.homeWrapper').imagesLoaded().done(function(instance){
		var s2origin = '52% 52%';
		var s3origin = 'center 60%';

		// SCENE 2 ZOOM / OFFSET
		var el3 = $('.placerProduct');
		var el3w = el3.width();
		zoom3 = (w*1.2) / el3w;
		offset3 = getOffset(el3,zoom3);

		TweenMax.set('.letterHero__ceo--intro',{x:w});
		TweenMax.set('.scene--4__wave',{x:w});
		TweenMax.set('.scene--3__text--8',{opacity:0});

		// PRIMARY TIMELINE
		mainTL.addLabel('1')
			.to('.scroll',0.2,{y:'100%'})
			.to('.scene--2',0.75,{opacity:0,zIndex:15},"-=0.2")
			.staggerTo('.scene--3__product',0.75,{y:'0%'},0.25,"-=0.3")
			.staggerTo('.scene--3__text--1 .letter',0.5,{opacity:1,rotationY:0,scale:1,transformOrigin:'center center'},0.1)
			.to('.scene--3__text--2',0.3,{opacity:1},"-=0.3")
			.to('.scene--3__text--1, .scene--3__text--2',0.3,{opacity:0},"+=1.5")
			.to('.valueText--2',0.5,{opacity:1})
			.to('.scroll',0.2,{y:'0%'})
			.addLabel('5')
			.to('.scroll',0.2,{y:'100%'})
			.to('.valueText--2',0.3,{opacity:0})
			.to('.scene--3__product',1,{y:'-130%'})
			.to('.scene--3__image',1,{y:'0%'},"-=1")
			.to('.scene--3__image',0.3,{x:20,right:0,left:'auto',marginLeft:0})
			.staggerTo('.scene--3__text--5 .letter',0.5,{opacity:1,rotationY:0,scale:1,transformOrigin:'center center'},0.1,"-=0.5")
			.to('.scene--3__text--6',0.5,{opacity:1},"-=0.3")
			.to('.scene--3__text--6, .scene--3__text--5',0.3,{opacity:0},"+=1.5")
			.to('.scene--3__text--7',0.5,{opacity:1})
			.to('.scene--3__text--8',0.5,{opacity:1})
			.to('.scroll',0.2,{y:'0%'})
			.addLabel('8')
			.to('.scroll',0.2,{y:'100%'})
			.set('.scene--1, .scene--2',{display:'none'})
			.to('.scene--4',0.3,{opacity:1})
			.to('.scene--3__text--8',0.3,{opacity:0},"-=0.3")
			.to('.scene--3__image',1,{x:-w})
			.to('.scene--4__wave',1,{x:0},"-=1")
			.staggerTo('.scene--4__text--1 .letter',0.5,{opacity:1,rotationY:0,scale:1,transformOrigin:'center center'},0.1,"-=0.3")
			.to('.scene--4__text--2',0.5,{opacity:1},"-=0.3")
			.to('.scene--4__text--1, .scene--4__text--2',0.3,{opacity:0},"+=1.5")
			.to('.scene--4__text--3',0.5,{opacity:1})
			.to('.scene--4__text--4',0.5,{opacity:1})
			.to('.scroll',0.2,{y:'0%'})
			.addLabel('11')
			.to('.scroll',0.2,{y:'100%'})
			.to('.scene--4__text--3, .scene--4__text--4',0.3,{opacity:0})
			.set('.leadershipText',{display:'none'})
			.to('.scene--4__wave',1,{x:-w})
			.to('.letterHero__ceo--intro',1,{x:0},"-=1")
			.to('.letterHero__text--intro h2',0.5,{opacity:1})
			.staggerTo('.letterHero__text--intro h2 .letter',0.5,{opacity:1,rotationY:0,scale:1,transformOrigin:'center center'},0.1,"-=0.3")
			.to('.letterHero__text--intro p, .letterHero__ceoName, .letterHero__text--intro h1',0.5,{opacity:1},"-=0.3")
			.to('.introButton',0.5,{opacity:1},"-=0.3")
			.addLabel('12');
			
	});

	// HANDLES THE SCROLLING

	// Clicking For Microsoft Surface
	$('.surfaceClick--down').on('click', function(){
		if (ran == false && w > 767)
		down = true;
		up = false;
		ran = true;

		var label = mainTL.getLabelAfter();
		
		mainTL.tweenTo(label);

		// allows scrolling again after a buffering period
		setTimeout(function () {
			ran = false;
		}, BUFFER);
	})
	
	// Swipe Down
	
	$('.surfaceClick--up').on('click', function(){
		down = false;
		up = true;
		ran = true;

		var label = mainTL.getLabelBefore();
		var currentLabel = mainTL.currentLabel();

		if (currentLabel !== '1') {
			mainTL.tweenTo(label);
		}


		setTimeout(function () {
			ran = false;
		}, BUFFER);
	})

	// Scrolls to the next or previous label on the main Timeline. 
	$(window).on('mousewheel', function (event) {
		var delta = event.deltaY * event.deltaFactor;
		var w = $(window).width();

		// ANIMATIONS ON SCROLL DOWN
		if (delta < -DISTANCE && ran == false && w > 767) {
			down = true;
			up = false;
			ran = true;

			var label = mainTL.getLabelAfter();


			mainTL.tweenTo(label);

			// allows scrolling again after a buffering period
			setTimeout(function () {
				ran = false;
			}, BUFFER);
		}

		// ANIMATIONS ON SCROLL UP
		if (delta > DISTANCE && ran == false && w > 767) {
			down = false;
			up = true;
			ran = true;

			var label = mainTL.getLabelBefore();
			var currentLabel = mainTL.currentLabel();

			if (currentLabel !== '1') {
				mainTL.tweenTo(label);
			}


			setTimeout(function () {
				ran = false;
			}, BUFFER);
		}
	});

	$(document).on('keydown',function(e){
		var code = e.which;

		if(code == 40) {
			// down
			down = true;
			up = false;
			ran = true;

			var label = mainTL.getLabelAfter();


			mainTL.tweenTo(label);

			// allows scrolling again after a buffering period
			setTimeout(function () {
				ran = false;
			}, BUFFER);
			
		} else if ( code == 38 ) {
			// up
			down = false;
			up = true;
			ran = true;

			var label = mainTL.getLabelBefore();
			var currentLabel = mainTL.currentLabel();

			if (currentLabel !== '1') {
				mainTL.tweenTo(label);
			}


			setTimeout(function () {
				ran = false;
			}, BUFFER);
		}
	});
}

var w = $(window).width();

if ( w > 1080 ) {
	home();
} else {
	// mobile stuff
	$('.homeWrapper').imagesLoaded().done(function(instance){
		var s3h = $('.scene--3__product--3').height();
		$('.scene--3__productWrap').height(s3h);

		$('.scene--3__text--8 br').replaceWith(' ');
		$('.scene--3__text--4 br').replaceWith(' ');
	});
}