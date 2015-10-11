( function( $ ) {
	
		
	//Retina check
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		
	//Helper methods
	
	//Main function
	$.fn.main = function() {
		
		// Get window size
		$window = $(window);
		winH = $window.height();
		winW = $window.width();

		//Set heights for each section
		//$('section').width(winW);
		$('#top').height(winH);
		$('#experiences').height(winW*.659);
		$('#interactive').height(winW*.625);
		$('#front-end').height(winW*.749);
		$('#hci').height(winW*.63);
		$('#game').height(winW*.6);
		$('#ibm').height(winW*.562);
		$('#bottom').height(winH);
	
		//Set data attributes based on width (function)
		//Check for retina
		if (window.devicePixelRatio == 2 && isChrome && isChrome) {
			$.fn.setData = function(X, bottomTopY, topBottomY) {
				$(this).attr('data-bottom-top' , 'left: ' + X*winW*.01 + 'px; top: ' + bottomTopY*winW*.01  + 'px;');
				$(this).attr('data-top-bottom' , 'left: ' + X*winW*.01 + 'px; top: ' + topBottomY*winW*.01 + 'px;');
				$(this).attr('data-anchor-target' , '#' + $(this).closest("section").attr("id"));
			};
		} else {
			$.fn.setData = function(X, bottomTopY, topBottomY) {
				$(this).attr('data-bottom-top' , 'background-position: ' + X*winW*.01 + 'px ' + bottomTopY*winW*.01  + 'px;');
				$(this).attr('data-top-bottom' , 'background-position: ' + X*winW*.01 + 'px ' + topBottomY*winW*.01 + 'px;');
			};
		}
		
		//Set text position
		$.fn.setText = function(X, bottomTopY, topBottomY) {
			$(this).attr('data-bottom-top' , 'left: ' + X*winW*.01 + 'px; top: ' + bottomTopY*winW*.01  + 'px;');
			$(this).attr('data-top-bottom' , 'left: ' + X*winW*.01 + 'px; top: ' + topBottomY*winW*.01 + 'px;');
			$(this).attr('data-anchor-target' , '#' + $(this).closest("section").attr("id"));
		};
		
		//Set opacity function
		$.fn.setOpacity = function(before, after) {
			bottomTop = $(this).attr('data-bottom-top');
			newBottomTop = bottomTop.replace(';', '; opacity: ' + before + ';');
			$(this).attr('data-bottom-top', newBottomTop);
			
			topBottom = $(this).attr('data-top-bottom');
			newTopBottom= topBottom.replace(';', '; opacity: ' + after + ';');
			$(this).attr('data-top-bottom', newTopBottom);
		};
		
		//Set text height function
		$(window).scroll(function() {
			$('p, .include').each(function() {
				textOffsetBottom = $(window).height() - (parseInt($(this).css('top').replace('px' , '')) + $(this).height());
				divOffsetBottom = $(window).height()-($(this).closest("section").height()-(-1*($(this).closest("section").position().top - $(window).scrollTop())));
				newHeight = Math.max($(this).height() - (divOffsetBottom - textOffsetBottom), 0);
				if (window.devicePixelRatio == 2 && isChrome) {
					$(this).css('clip' , 'rect(0px, ' + $(this).width() + 'px, ' + newHeight + 'px, 0px)');
				} else {
					$(this).css('height' , newHeight);
				}
			});
		});
		
		//Set font width
		$('p').css('font-size' , winW*.04);
		$('#btmText2').css('font-size' , winW*.03);
		
		//Set data attributes based on width (function)
		
		//top
		center = (winW/2);
		centerTop = center - 1.325 - 165;
		centerBottom = center - 369.5275;
		bottomTop = winH - 420;
		bottomBottom = winH - 540;
		beneathBottom = bottomBottom*1.5;
		
		//if (window.devicePixelRatio == 2 && isChrome) {
			//$('#topImg').attr('data-top' , 'left: ' + centerTop + 'px; top: ' + bottomTop + 'px;');
			//$('#topImg').attr('data-top-bottom' , 'left: ' + centerTop + 'px; top: 0px');
			//$('#topImg').attr('data-anchor-target' , '#top');
		//} else {
			$('#topImg').attr('data-top' , 'background-position: ' + centerTop + 'px ' + bottomTop + 'px;');
			$('#topImg').attr('data-top-bottom' , 'background-position: ' + centerTop + 'px 0px');
		//}
		
		//"I create experiences"
		$('#experiences .background').setData(0, 0, -5);
		$('#people').setData(0, 22.5, 12.5);
		$('#experiences p').setText(55.5, 32, 25.5);
			$('#experiences p').setOpacity(2, 0);
			
		//"through interactive design"
		$('#green').setData(0, 2.5, -2.5);
		$('#blue').setData(0, 28.5, 20.8);
		$('#hand').setData(7, -11, 0);
		$('#interactive p').setText(59, 15.35, 10.35);
			$('#interactive p').setOpacity(2, 0);
			
		//"and front-end development."
		$('#front-end .background').setData(0, -12.5, -17.5);
		$('#small_paint').setData(9.25, 8.5, 2);
		$('#med_paint').setData(9.55, 12.5, 2.5);
		$('#large_paint').setData(9.75, 10.5, -2.25);
		$('#css_paint').setData(31, 8, 2);
		$('#front-end p').setText(22.9, 36.75, 30.25);
			$('#front-end p').setOpacity(2, 0);
		$('#keyboard').setData(0, 44.55, 39.55);
		
		//"I study HCI at Cornell"
		$('#hci .background').setData(0, -2.5, 0);
		$('#gates').setData(0, 15.5, 12.5);
		$('#onlookers').setData(74.3, 45, 40);
		$('#hci p').setText(11, 16, 12);
			$('#hci p').setOpacity(2, .25);
		
		//"with a minor in game design"
		$('#game .background').setData(0, 0, -5);
		$('#left').setData(0, 0, -6);
		$('#right').setData(69, 10, 2.75);
		$('#halo').setData(15.5, 17, 7);
		$('#rocks').setData(0, 31, 23);
		$('#game p').setText(6.5, 9, 2.25);
			$('#game p').setOpacity(2, .25);
		
		//"Last summer, I designed @"
		$('#ibm .background').setData(0, 0, -5);
		$('#lab').setData(6.5, 20, 12);
		$('#ibm p').setText(6.5, 9.25, 2.75);
			$('#ibm p').setOpacity(2, .4);
			
		//"Now let me design for you."	
		//Check for retina
		if (window.devicePixelRatio == 2 && isChrome) {
			$('#bottomImg').attr('data-bottom' , 'left: ' + centerBottom + 'px; top: ' + bottomBottom + 'px;');
			$('#bottomImg').attr('data-bottom-top' , 'left: ' + centerBottom + 'px; top: ' + beneathBottom + 'px');
			$('#bottomImg').attr('data-anchor-target' , '#bottom');
		} else {
			$('#bottomImg').attr('data-bottom' , 'background-position: ' + centerBottom + 'px ' + bottomBottom + 'px;');
			$('#bottomImg').attr('data-bottom-top' , 'background-position: ' + centerBottom + 'px ' + beneathBottom + 'px');
		}

		$('#btmText1').attr('data-bottom-top' , 'left ' + 6.5*winW*.01 + 'px; top: ' + 14*winW*.01  + 'px;');
		$('#btmText1').attr('data-bottom' , 'left: ' + 6.5*winW*.01 + 'px; top: ' + 4*winW*.01 + 'px;');
		$('#btmText1').attr('data-anchor-target' , '#bottom');
		
		$('#btmText2').attr('data-bottom-top' , 'left: ' + 6.5*winW*.01 + 'px; top: ' + 25*winW*.01  + 'px; opacity: -1;');
		$('#btmText2').attr('data-bottom' , 'left: ' + 6.5*winW*.01 + 'px; top: ' + 10*winW*.01 + 'px; opacity: .5');
		$('#btmText2').attr('data-anchor-target' , '#bottom');
	};
	//End of main function
	
	//For replacing backgrounds
	//Check for retina
	if (window.devicePixelRatio == 2 && isChrome) {
		$.fn.bgSwap = function(id, oldB, newB) {
			oldBack = $(id).attr('src');
			newBack = oldBack.replace(oldB , newB);
			$(id).attr('src', newBack);
		};
	} else {
		$.fn.bgSwap = function(id, oldB, newB) {
			oldBack = $(id).css("background-image");
			newBack = oldBack.replace(oldB , newB);
			$(id).css("background-image", newBack);
		};
	}
	//End of helper methods

	//Call main function
	$.fn.main();
	
	//If aspect ratio < 1.7, make backgrounds static image and hide images 
	if (winW/winH <1.7) {
		$.fn.bgSwap('#experiences .background' , 'background.' , 'background2.');
		$('#people').css('visibility' , 'hidden');
		$.fn.bgSwap('#gates' , 'gates' , 'gates2');
		$('#onlookers').css('visibility' , 'hidden');
		background = 2;
	} else {
		background = 1;
	}
	
	// Init Skrollr
		var s = skrollr.init({forceHeight: false});
	
	//On resize
	$( window ).resize(function() {
		
		// Init Skrollr and destroy it
			var s = skrollr.init({forceHeight: false});				
		s.destroy();
		
		//Call main function
		$.fn.main();

		//If aspect ratio < 1.7, make backgrounds static image and hide images 
		if (winW/winH <1.7) {
			if (background == 1) {
				$.fn.bgSwap('#experiences .background' , 'background.' , 'background2.');
				$('#people').css('visibility' , 'hidden');
				$.fn.bgSwap('#gates' , 'gates' , 'gates2');
				$('#onlookers').css('visibility' , 'hidden');
				background = 2;
			}
		//Otherwise, make backgrounds chopped image and show images
		} else {
			if (background == 2) {
				$.fn.bgSwap('#experiences .background' , '2.' , '.');
				$('#people').css('visibility' , 'visible');
				$.fn.bgSwap('#gates' , 'gates2' , 'gates');
				$('#onlookers').css('visibility' , 'visible');
				background = 1;
			}
		} 	
		
		$('#scroll').css("opacity" , .75);
		
		//Init Skrollr
		var s = skrollr.init({forceHeight: false});

		
	});	
	
} )( jQuery );
