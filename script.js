$(document).ready(function(){

	var fixed = false;
	$(document).scroll(function() {
    	if( $(this).scrollTop() > 800 ) {
 	    	if( !fixed ) {
   	    		fixed = true;
       			$('#scrollmenu').show(200);
   			};
   		} else {
     		if( fixed ) {
       			fixed = false;
         		$('#scrollmenu').hide(200);
     		};
   		};
	});

	$('#icon').on('mouseenter', function(){
		$(this).animate({'width':'42px'}, 200);
	});
	$('#icon').on('mouseleave', function(){
		$(this).animate({'width':'40px'}, 200);
	})

	$('#scrollmenu').on('click', function(){
		if(!$('.slide-menu').hasClass('slid-out')){
			$('.slide-menu').addClass('slid-out').css({'display':'block'}).animate({'right': '65px'}, 400);
			$('#overlay').fadeIn();
			$('overlay').toggle();
		} else if($('.slide-menu').hasClass('slid-out')){
			$('.slide-menu').animate({'right': '-240px'}, 400).removeClass('slid-out');
			$('#overlay').toggle();
			$('#overlay').fadeOut();
		};
	});

	$('#overlay').on('click', function(){
		$(this).toggle();
		if($('.slide-menu').hasClass('slid-out')){
			$('.slide-menu').animate({'right': '-240px'}, 400);
			$('.slide-menu').removeClass('slid-out');
		};
	});

	$('.slide-menu').on('click', '.close-menu', function(){
		$('.slide-menu').animate({'right': '-240px'}, 400);
		$('.slide-menu').removeClass('slid-out');
		$('#overlay').toggle();
		$('#overlay').fadeOut();
	});

	$(window).bind('scroll', function(){
		if( ($(window).scrollTop() < 800) && ($('.slide-menu').hasClass('slid-out')) ){
			$('#overlay').toggle();
			$('.slide-menu').animate({'right': '-240px'}, 200);
			$('.slide-menu').removeClass('slid-out');
		};
	});


});