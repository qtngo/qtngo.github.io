//wait until the document has loaded
$(document).ready(function(){
	//everything in here will only run once the elements have loaded.
	console.log("jQuery is up and running");

	//START by Auto-HIDING the Section of the page.
	$("section").hide();

	//TOP BUTTONS CLICKED
	$("#t1vegetables").click(arrow1);
	$("#t2softcheese").click(arrow2);
	$("#t3hardcheese").click(arrow3);
	$("#t4starches").click(arrow4);
	$("#t5fish").click(arrow5);
	$("#t6whitemeat").click(arrow6);
	$("#t7redmeat").click(arrow7);
	$("#t8sweets").click(arrow8);

	//BOTTOM BUTTONS CLICKED
	$("#b1drywhite").click(arrow1);
	$("#b2sweetwhite").click(arrow2);
	$("#b3richwhite").click(arrow3);
	$("#b4sparkling").click(arrow4);
	$("#b5lightred").click(arrow5);
	$("#b6mediumred").click(arrow6);
	$("#b7boldred").click(arrow7);
	$("#b8dessert").click(arrow8);


	//Don't trigger default Jump behavior
	//Ques: AM I DOING THIS CORRECT?!
	$("img").click(dontJump);
 	function dontJump(){
		 event.preventDefault();	
 	}

	//CONTENT OF THE SECTION (When Shown)
	function arrow1(){
		console.log("slideToggle Arrow 1");
		$("#bgt1").slideToggle();
	}
	function arrow2(){
		console.log("slideToggle Arrow 2");
		$("#bgt2").slideToggle();
	}

	function arrow3(){
		console.log("slideToggle Arrow 3");
		$("#bgt3").slideToggle();
	}

	function arrow4(){
		console.log("slideToggle Arrow 4");
		$("#bgt4").slideToggle();
	}
		
	function arrow5(){
		console.log("slideToggle Arrow 5");
		$("#bgt5").slideToggle();
	}
		
	function arrow6(){
		console.log("slideToggle Arrow 6");
		$("#bgt6").slideToggle();
	}

	function arrow7(){
		console.log("slideToggle Arrow 7");
		$("#bgt7").slideToggle();
	}

	function arrow8(){
		console.log("slideToggle Arrow 8");
		$("#bgt8").slideToggle();
	}



})
