/**

Javascript/jQuery Exercises: Selecting Things In The DOM!

Answer the following questions. This practice set gets progressively harder.
Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and
move on to the next question.
 
 */


// Retrieve a property of the background, and output it to the console (getter)
// alert()
// .css()
console.log("hey")

console.log($("body").css("background-color"));

// Set/change the color of the <header> element (setter)
$("header").css("background-color","blue");

//hide the 2nd row of social icons using .hide()

//$("#social").hide();

//When any button is clicked, change the color of the <aside>
$(".button").click(changeAside);

function changeAside(){
	//step1 - prevents jumping back up top
	event.preventDefault();
	//step2 - changing aside to red color
	$("aside").css("background-color","orange");

	//BONUS - shorthand notation for multiple css delcaration
//	$("aside").css({
//		"background-color":"orange",
//		"color":"orange"
//		});

	//example answered in class q's.
//	var car = {
//		make:"Hyundai",
//		model:"Accent"
//	}
}

//When any button is clicked, change the color of the <aside> using the .attr() method
//$(".button").attr()

//Choose an element on your page, that when clicked, invokes the slideUp() method 
	
	//Detect when the blue button is clicked
	$(".secondary").click(asideUp);


	//Then we want to have the aside slide up
	function asideUp(){
		//step1
		$("aside").slideUp();
	}

	//clicking the SOCIAL icons
	$("#social").click(asideDown);

	function asideDown(){
		event.preventDefault();
		$("aside").slideDown();
	}

//Now, choose an element on your page, that when clicked, invokes the slideDown() method 
	$(".logo").click(asideDown2);	//when the Relaxr logo is clicked the ASIDE goes down.

	function asideDown2(){
		event.preventDefault();
		$("aside").slideDown();
	}

//BONUS
//Utilize the children() selector.  When we click on benefits, have all its children elements have orange text

//$("benefits").click(textColorChange);

//function textColorChange(){

//}



