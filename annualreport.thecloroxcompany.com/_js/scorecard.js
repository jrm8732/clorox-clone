// SCORECARD STUFF


	// LANDING

var scorecard_landing = function() {
	var timeline = new TimelineMax({});
		timeline.to('.scorecardLandingChart--1 .mask',0.5,{strokeDashoffset:675}) //1
				.to('.scorecardLandingChart--1 .scorecardLandingChart__text',0.3,{opacity:1})
				.to('.scorecardLandingChart--1 .chartLine polyline',0.4,{strokeDashoffset:0},"-=0.3")
				.to('.scorecardLandingChart--1 .left',0.5,{scaleY:1,transformOrigin:'top center'})
				.to('.scorecardLandingChart--1 .top',0.5,{scaleX:1,transformOrigin:'center left'},"-=0.5")
				.to('.scorecardLandingChart--1 .bot',0.5,{scaleX:1,transformOrigin:'center left'})
				.to('.scorecardLandingChart--1 .right',0.5,{scaleY:1,transformOrigin:'top center'},"-=0.5")
				.to('.scorecardLandingChart--1 .scorecardLandingBox__title, .scorecardLandingChart--1 .scorecardLandingBox__products',0.3,{opacity:1},'-=0.15')
				.to('.scorecardLandingChart--2 .mask',0.5,{strokeDashoffset:675},"-=0.3") //2
				.to('.scorecardLandingChart--2 .scorecardLandingChart__text',0.3,{opacity:1})
				.to('.scorecardLandingChart--2 .chartLine polyline',0.4,{strokeDashoffset:0},"-=0.3")
				.to('.scorecardLandingChart--2 .left',0.5,{scaleY:1,transformOrigin:'top center'})
				.to('.scorecardLandingChart--2 .top',0.5,{scaleX:1,transformOrigin:'center left'},"-=0.5")
				.to('.scorecardLandingChart--2 .bot',0.5,{scaleX:1,transformOrigin:'center left'})
				.to('.scorecardLandingChart--2 .right',0.5,{scaleY:1,transformOrigin:'top center'},"-=0.5")
				.to('.scorecardLandingChart--2 .scorecardLandingBox__title, .scorecardLandingChart--2 .scorecardLandingBox__products',0.3,{opacity:1},'-=0.15')
				.to('.scorecardLandingChart--3 .mask',0.5,{strokeDashoffset:675},"-=0.3") //3
				.to('.scorecardLandingChart--3 .scorecardLandingChart__text',0.3,{opacity:1})
				.to('.scorecardLandingChart--3 .chartLine polyline',0.4,{strokeDashoffset:0},"-=0.3")
				.to('.scorecardLandingChart--3 .left',0.5,{scaleY:1,transformOrigin:'top center'})
				.to('.scorecardLandingChart--3 .top',0.5,{scaleX:1,transformOrigin:'center left'},"-=0.5")
				.to('.scorecardLandingChart--3 .bot',0.5,{scaleX:1,transformOrigin:'center left'})
				.to('.scorecardLandingChart--3 .right',0.5,{scaleY:1,transformOrigin:'top center'},"-=0.5")
				.to('.scorecardLandingChart--3 .scorecardLandingBox__title, .scorecardLandingChart--3 .scorecardLandingBox__products',0.3,{opacity:1},'-=0.15')
				.to('.scorecardLandingChart--4 .mask',0.5,{strokeDashoffset:675},"-=0.3") //4
				.to('.scorecardLandingChart--4 .scorecardLandingChart__text',0.3,{opacity:1})
				.to('.scorecardLandingChart--4 .chartLine polyline',0.4,{strokeDashoffset:0},"-=0.3")
				.to('.scorecardLandingChart--4 .left',0.5,{scaleY:1,transformOrigin:'top center'})
				.to('.scorecardLandingChart--4 .top',0.5,{scaleX:1,transformOrigin:'center left'},"-=0.5")
				.to('.scorecardLandingChart--4 .bot',0.5,{scaleX:1,transformOrigin:'center left'})
				.to('.scorecardLandingChart--4 .right',0.5,{scaleY:1,transformOrigin:'top center'},"-=0.5")
				.to('.scorecardLandingChart--4 .scorecardLandingBox__title, .scorecardLandingChart--4 .scorecardLandingBox__products',0.3,{opacity:1},'-=0.15');
}

	// GLOBAL FOOTPRINT

var footprint = function() {
	var timeline = new TimelineMax({});
		timeline.to('.footprintLocation--1 .line',0.75,{scale:1})
				.staggerTo('.footprintLocation--1 .footprintLocation__title, .footprintLocation--1 li',0.3,{opacity:1},0.15,"-=0.75")
				.to('.footprintLocation--2 .line',0.75,{scale:1},"-=0.2")
				.staggerTo('.footprintLocation--2 .footprintLocation__title, .footprintLocation--2 li',0.3,{opacity:1},0.15,"-=0.75")
				.to('.footprintLocation--3 .line',0.75,{scale:1},"-=0.2")
				.staggerTo('.footprintLocation--3 .footprintLocation__title, .footprintLocation--3 li',0.3,{opacity:1},0.15,"-=0.75")
				.to('.footprintLocation--4 .line',0.75,{scale:1},"-=0.2")
				.staggerTo('.footprintLocation--4 .footprintLocation__title, .footprintLocation--4 li',0.3,{opacity:1},0.15,"-=0.75")
				.to('.footprintLocation--5 .line',0.75,{scale:1},"-=0.2")
				.staggerTo('.footprintLocation--5 .footprintLocation__title, .footprintLocation--5 li',0.3,{opacity:1},0.15,"-=0.75")
				.to('.footprintLocation--6 .line',0.75,{scale:1},"-=0.2")
				.staggerTo('.footprintLocation--6 .footprintLocation__title, .footprintLocation--6 li',0.3,{opacity:1},0.15,"-=0.75")
				.to('.footprintLocation--7 .line',0.75,{scale:1},"-=0.2")
				.staggerTo('.footprintLocation--7 .footprintLocation__title, .footprintLocation--7 li',0.3,{opacity:1},0.15,"-=0.75");

	$('.footprintClick').on('click',function(){
		var footprint = $(this).attr('data-footprint');

		$('.footprintIcon').addClass('hide');
		$('.footprintIcon--'+footprint).removeClass('hide');
	});
}

	// PERFORMANCE

var performance = function() {
	TweenMax.set('.bar',{scaleY:0,transformOrigin:'bottom center'});

	var timeline = new TimelineMax({});
		timeline.staggerTo('.bar',0.3,{scaleY:1,ease: Back.easeOut.config(1.7)},0.15)
				.to('.performanceChart__text, .scorecard__title',0.3,{opacity:1})
}


var scorecardStatTL = new TimelineMax({});
	scorecardStatTL.staggerTo('.scorecardStat',0.5,{y:'0%'},0.25)
				   .to('.upGoal, .downGoal, .downGoalSmall',0.75,{opacity:1,y:'0%'},"-=0.2");