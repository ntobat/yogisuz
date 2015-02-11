$(document).ready(function(){
	
	if ( $(window).width() > 675) {
	
		var fixed = false;
		$(document).scroll(function() {
    		if( $(this).scrollTop() > 90 ) {
 		    	if( !fixed ) {
   	   		 		fixed = true;
       				$('header').animate({'left':'-330px'}, 150);
   	    			$('.slide-menu').animate({'left':'110px'}, 150);
   				};
   			} else {
     			if( fixed ) {
       				fixed = false;
        	 		$('header').animate({'left':'0'}, 150);
        	 		$('.slide-menu').animate({'left':'440px'}, 150);
     			};
   			};
		});

		$('#nav-button').on('click', function(){
			if(!$('.slide-menu').hasClass('slid-out')){
				$('.slide-menu').addClass('slid-out').css({'display':'block'}).animate({'top': '20px'}, 400);
				$('#overlay').fadeIn();
				$('overlay').toggle();
			} else if($('.slide-menu').hasClass('slid-out')){
				$('.slide-menu').animate({'top': '-320px'}, 400).removeClass('slid-out');
				$('#overlay').toggle();
				$('#overlay').fadeOut();
			};
		});

		$('.slide-menu').on('click', '.close-menu', function(){
			$('.slide-menu').animate({'top': '-320px'}, 400);
			$('.slide-menu').removeClass('slid-out');
			$('#overlay').toggle();
			$('#overlay').fadeOut();
		});

		$('#overlay').on('click', function(){
			$(this).toggle();
			if($('.slide-menu').hasClass('slid-out')){
				$('.slide-menu').animate({'top': '-320px'}, 400);
				$('.slide-menu').removeClass('slid-out');
			};
		});

		$('.expand').on('click', function(){
			$('.address').slideToggle();
			if(!$('#expand').hasClass('rotated')){
				$('#expand').addClass('rotated');
			} else {
				$('#expand').removeClass('rotated');
			};
		});

	} else {

		$('#nav-button').on('click', function(){
			if(!$('.slide-menu').hasClass('slid-out')){
				$('.slide-menu').addClass('slid-out').css({'display':'block'}).animate({'top': '12%'}, 400);
				$('#overlay').fadeIn();
				$('overlay').toggle();
			} else if($('.slide-menu').hasClass('slid-out')){
				$('.slide-menu').animate({'top': '-320px'}, 400).removeClass('slid-out');
				$('#overlay').toggle();
				$('#overlay').fadeOut();
			};
		});

		$('#overlay').on('click', function(){
			$(this).toggle();
			if($('.slide-menu').hasClass('slid-out')){
				$('.slide-menu').animate({'top': '-320px'}, 400);
				$('.slide-menu').removeClass('slid-out');
			};
		});

		$('.expand').on('click', function(){
			$('.address').slideToggle();
			if(!$('#expand').hasClass('rotated')){
				$('#expand').addClass('rotated');
			} else {
				$('#expand').removeClass('rotated');
			};
		});

	};


})