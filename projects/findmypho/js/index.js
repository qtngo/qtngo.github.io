/*****************************************************************
	(Part A1: LOCATION BUTTON)
	A1. Hide the 10 button lazy-cheat feature.
	A2. Whenever the LOCATION btn is clicked, expand the buttons.
	A3. Make sure it doesn't auto-jump (show/hide) right away.
	A4. Exercise the "slideToggle" with an onClick -> LOCATION btn.

	(Part B1: SEARCH BUTTON)
	B1. Get user input into the search, input bar.
	B2. Store the input into a VAR somewhere.
	B3. Check to see which of the 10 cities it links to.
	B4. IF Valid, change background of that city
	B5. IF InValid, do something else.

	(Part A2: CLICKING Any of the LOCATION BUTTON)
	A5. Clicking any of the 10 buttons will link to the same background
	as the condition links to from section B (above).
	A6. Display background.

	(Part C1: BONUS - GOOGLE MAP + PIN STORE + LOCATION)
	C1. Save existing GoogleMap URLS for each of the 10 cities.
	C2. Use an ASIDE to load the GoogleMap API onto.
	** Change Opacity to cheat the Hide/Show feature **
	C3. Upon each SEARCH or LOCATION click, load new GoogleMap Link.
*****************************************************************/

/*****************************************************************
	UPDATE: 
	-- Parts A1, B1, A2 = DONE.
	-- Parts C1 (bonus w/ GoogleMap), delete code, not working.
*****************************************************************/


$(document).ready(function(){
	//console.log("test");

	//===============================================
	//HIDES the 10 city button (cheat code)
	//===============================================
	$("#btn-location").click(function(){
		$("#panel").slideToggle("slow");
		event.preventDefault();	
		console.log("sliding the buttons Up/Down");
	});


	//THE BELOW DOESN'T WORK FOR SLIDETOGGLE
	//KEEP FOR FUTURE TROUBLESHOOTING
	// $(".city-buttons").hide();
	// //CLICKS the LOCATION BTN
	// $("#btn-location").click(cityButtonsSection);
	// $(".city-buttons").click(dontJump);
	// function dontJump(){
	// 	event.preventDefault();	
	// }
	// function cityButtonsSection(){

	// 	console.log("show/hide the 10 city buttons");
	// 	$("#city-buttons").slideToggle();
	event.preventDefault();	
	// }
	

	//===============================================
	//CLICKS the SEARCH BTN
	//===============================================
	$("#btn-search").click(searchForCity);

	function searchForCity(){
		event.preventDefault();	//prevents form submission

		//Grab the user input and log out visual check
		var city = $('#new-entry').val();		
		console.log(city);						
		
		//check which condition the string will execute
		//LA
		if ((city=="Los Angeles") || (city=="LAX") || (city=="LA")){
			$("body").attr("class","bg-losangeles");
			console.log("BG = LA");
		}	
		//SB
		else if ((city=="Torrance") || (city=="South Bay")){
			$("body").attr("class","bg-torrance");
			//$("body").addClass("bg-torrance");
			console.log("BG = Torrance");
		}
		//SD
		else if ((city=="La Mesa") || (city=="SD")){
			$("body").attr("class","bg-lamesa");
			console.log("BG = La Mesa");	
		}
		//SLT
		else if ((city=="South Lake Tahoe") || (city=="SLT")){
			$("body").attr("class","bg-southlaketahoe");
			console.log("BG = South Lake Tahoe");	
		}		
		//OC
		else if ((city=="Westminster") || (city=="OC")){
			$("body").attr("class","bg-westminster");
			console.log("BG = Westminster");	
		}
		//LV
		else if ((city=="Las Vegas") || (city=="LV") || (city=="Vegas") || (city=="Sin City")){
			$("body").attr("class","bg-lasvegas");
			console.log("BG = Las Vegas");	
		}
		//NY
		else if ((city=="New York") || (city=="NYC") || (city=="NY") || (city=="Manhattan")){
			$("body").attr("class","bg-newyork");
			console.log("BG = New York");	
		}
		//IL
		else if ((city=="Peoria") || (city=="IL")){
			$("body").attr("class","bg-peoria");
			console.log("BG = Peoria");	
		}
		//AZ
		else if ((city=="Phoenix") || (city=="Zona")){
			$("body").attr("class","bg-phoenix");
			console.log("BG = Phoenix");	
		}
		//SF
		else if ((city=="San Francisco") || (city=="SF") || (city=="norcal")){
			$("body").attr("class","bg-sanfrancisco");
			console.log("BG = San Francisco");	
		}
		//NONE
		else{
			$("body").attr("class","bg-panda");
			console.log("Panda Panda Panda!");
		}
		console.log("finished loop");
		

		/*The below Switch statement works, but we'll use if/else for reqt's*/
		/*
		switch(city){
			case "Los Angeles" || "LAX" || "LA":
				$("body").attr("class","bg-losangeles");
				console.log("BG = LA");
				break;
			case "Torrance" || "South Bay":
				$("body").attr("class","bg-torrance");
				console.log("BG = Torrance");	
				break;
			case "La Mesa" || "SD":
				$("body").attr("class","bg-lamesa");
				console.log("BG = La Mesa");	
				break;
			case "South Lake Tahoe" || "SLT":
				$("body").attr("class","bg-southlaketahoe");
				console.log("BG = South Lake Tahoe");	
				break;
			case "Westminster" || "OC":
				$("body").attr("class","bg-westminster");
				console.log("BG = Westminster");	
				break;
			case "Las Vegas" || "LV" || "Vegas" || "Sin City":
				$("body").attr("class","bg-lasvegas");
				console.log("BG = Las Vegas");	
				break;
			case "New York" || "NYC" || "NY" || "Manhattan":
				$("body").attr("class","bg-newyork");
				console.log("BG = New York");	
				break;
			case "Peoria" || "IL":
				$("body").attr("class","bg-peoria");
				console.log("BG = Peoria");	
				break;
			case "Phoenix" || "Zona":
				$("body").attr("class","bg-phoenix");
				console.log("BG = Phoenix");	
				break;
			case "San Francisco" || "SF" || "norcal":
				$("body").attr("class","bg-sanfrancisco");
				console.log("BG = San Francisco");	
				break;
			default:
				break;
		}
		console.log("finished switch statement");
		*/
	
	}//!!End function searchForCity!!


	//===============================================
	//CLICKS any of the 10 CITY BTN
	//===============================================
	//These are the 10 lazy/cheat buttons.
	$("#btn-losangeles").click(switchLosAngeles);
	$("#btn-torrance").click(switchTorrance);
	$("#btn-lamesa").click(switchLaMesa);
	$("#btn-southlaketahoe").click(switchSouthLakeTahoe);
	$("#btn-westminster").click(switchWestminster);
	$("#btn-lasvegas").click(switchLasVegas);
	$("#btn-newyork").click(switchNewYork);
	$("#btn-peoria").click(switchPeoria);
	$("#btn-phoenix").click(switchPhoenix);
	$("#btn-sanfrancisco").click(switchSanFrancisco);

	//These are the functions for the 10 lazy/cheat btns.
	function switchLosAngeles(){
		$("body").attr("class","bg-losangeles");
	}
	
	function switchTorrance(){
		$("body").attr("class","bg-torrance");
	}

	function switchLaMesa(){
		$("body").attr("class","bg-lamesa");
	}

	function switchSouthLakeTahoe(){
		$("body").attr("class","bg-southlaketahoe");
	}

	function switchWestminster(){
		$("body").attr("class","bg-westminster");
	}

	function switchLasVegas(){
		$("body").attr("class","bg-lasvegas");
	}

	function switchNewYork(){
		$("body").attr("class","bg-newyork");
	}

	function switchPeoria(){
		$("body").attr("class","bg-peoria");
	}

	function switchPhoenix(){
		$("body").attr("class","bg-phoenix");
	}

	function switchSanFrancisco(){
		$("body").attr("class","bg-sanfrancisco");
	}

});






