$(document).ready(function(){

/********************************************************/
/*OWNER-Carousel - Index.html/About Section*/
/********************************************************/
/*We have 3 test styles*/
/********************************************************/
	//Ex.01 - Use this if other's fail
	// var interval = window.setInterval(ownerSlides, 1200)

	// function ownerSlides(){
	// 	var $firstSlide = $('#owner-carousel').find('div:first');
	// 	var width = $firstSlide.width();

	// 	$firstSlide.animate({marginLeft: -width}, 1200, function(){
	// 		var $lastSlide = $('#owner-carousel').find('div:last');
	// 		$lastSlide.after($firstSlide);
	// 		$firstSlide.css({marginLeft:0});
	// 	})
	// }	
	//end rotateSlides()
	//END Ex.01

	//Ex.02 - Fade in doesn't work, yet.
	// setInterval('cycleImages()',1000);

	// function cycleImages(){
	// 	var $active = $('#cycler .active');
	// 	var $next = ($active.next().length > 0) ? $active.next() : $'#cycler img.first');
		
	// 	$next.css('z-index',2)
	// 	active.fadeOut(1500,function(){
	// 		$active.css('z-index',1).show().removeClass('active');
	// 		$next.css('z-index',3).addClass('acive');
	// 	});
	// }
	//END Ex.02

	//Ex.03 - switch
	var currentIndex = 0,
	  items = $('.fade-container div'),
	  itemAmt = items.length;

	function cycleItems() {
	  var item = $('.fade-container div').eq(currentIndex);
	  items.hide();
	  item.css('display','inline-block');
	}

	var autoSlide = setInterval(function() {
	  currentIndex += 1;
	  if (currentIndex > itemAmt - 1) {
	    currentIndex = 0;
	  }
	  cycleItems();
	}, 2000);
	//END Ex.03 switch


/********************************************************/
/*MINI-Project CAROUSEL - Index.html/Project section*/
/********************************************************/
	var interval = window.setInterval(rotateSlides, 3000)

	function rotateSlides(){
		var $firstSlide = $('#project-carousel').find('div:first');
		var width = $firstSlide.width();

		$firstSlide.animate({marginLeft: -width}, 3000, function(){
			var $lastSlide = $('#project-carousel').find('div:last');
			console.log($firstSlide, $lastSlide)
			$lastSlide.after($firstSlide);
			$firstSlide.css({marginLeft:0});
		})
	}	//end rotateSlides()

	$('#left-arrow').click(previousSlide);
	$('#right-arrow').click(nextSlide);
	$('.slide-image').click(nextSlide);

	function nextSlide(){
		window.clearInterval(interval);
		var $currentSlide = $('#project-carousel').find('div:first');
		var width = $currentSlide.width();

		$currentSlide.animate({marginLeft: -width}, 3000, function(){
			var $lastSlide = $('#project-carousel').find('div:last');
			$lastSlide.after($currentSlide);
			$currentSlide.css({marginLeft: 0});
			interval = window.setInterval(rotateSlides, 300);
		})
	}	//END nextSlide function

	function previousSlide(){
		window.clearInterval(interval);
		var $currentSlide = $('#project-carousel').find('div:first');
		var width = $currentSlide.width();
		var $previousSlide = $('#project-carousel').find('div:last');

		$previousSlide.css({marginLeft: -width});
		$currentSlide.before($previousSlide);

		$previousSlide.animate({marginLeft: 0}, 3000, function(){
			interval = window.setInterval(rotateSlides, 3000);
		});
	}	//END previousSlide function


/********************************************************/
/*Randomize pictures/images on the PROJECT section*/
/********************************************************/
	$('#project-list').each(function(){
		//Get items in current UL
		var $projectlist = $(this);
		//Call/Get array of LI in current UL
		var $liArr = $projectlist.children('.pictures');
		//(Important) Sort array of LI in current UL randomly
		$liArr.sort(function(a,b){
			//Get a rand() num bt 0 up to 10, use 6 for now.
			var temp = parseInt( Math.random()*6 );
			//Get 1 or 0, is (temp = odd or even?)
			var isOddOrEven = temp%2;
			//Get +1 or -1, whether temp > or < than max 5, use 2.
			var isPosOrNeg = temp>2 ? 1 : -1;
			// Return -1, 0, or +1, throw in mod for better rand()?
			return( isOddOrEven*isPosOrNeg%4 );
		})
		// append LI to UL
		.appendTo($projectlist);
	})
         


});	//END $(document).ready