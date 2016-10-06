$(document).ready(function(){

/****************************************************************************************************
BREAKDOWN:
PART 1: Adding List Item
x	a) creating all input & selection fields.
x	b) submitting items selected.
x	c) display below inside an UL/LI.
PART 2: Adding New Items into Existing List.
x	a) creating new input fields
x	b) taking input fields from <add option> and linking to existing arrays.
x	c) update existing array (refreshes pages after (b) is done).
PART 3: (single) Selecting, Editing, or Deleting single items in Existing List.
x	a) Edit listed item
x	b) Delete listed item
PART 4: (all) Clear/Delete entire list field.
x	a) Delete Selected
x	b) Delete ALL
PART 5: (all) Export entire list field.
-	a) Export Selected
-	b) Export ALL
PART 6: (all) Email entire list field.
-	a)Email button
****************************************************************************************************/

	//===============================================================================================
	//GLOBAL VAR & ARRAY Declaration
	//===============================================================================================
	var arrayUser = ["(Select User)","Anthony Stark","Bruce Banner","Clinton Barton","Dane Whitman","Harry Cleese","Henry Pym","Jacques Duquesne","Janet van Dyne","Luke Charles","Natasha Romanoff","Pietro Maximoff","Steven Rogers","Thor Odinson","Victor Shade","Wanda Maximoff"];
	var arrayOTC = ["(Select OTC)","Advil, 200mg, 100qty, $13.02",	"Tylenol, 325mg, 100qty, $9.77","Delsym, 30mg/5ml, 89ml, $11.76","Robitussin, 100-10mg/5ml, 118ml, $6.65","Ricoloa, N/A, 18qty, $2.78"];
	var arrayFood = ["(Select Food)","Sandwich, $3.95","Fruit Cup, $2.00","Veggie Cup, $2.50","Yogurt, $1.25","Chicken Salad, $4.50","Muffin, $1.50","Candy Bar, $1.10","Bagel, $0.75","Chips, $0.90"];
	var arrayDrink = ["(Select Drink)","Soda Can, $1.00","Fountain Drink (S), $1.25","Fountain Drink (L), $2.00","Snapple, $1.75","Water (S), $1.25","Water (L), $1.50","Gatorade, $1.50",	"VitaminWater, $2.00",	"Ensure, $2.25","V8, $1.25","Milk, $1.75","Orange Juice, $1.25","Apple Cider, $1.25"];

	//===============================================================================================
	//EVENT LISTENERS for "SUBMIT"
	//===============================================================================================
	$('#select-date').change(grabDateSelection);		//(a) selects DATE
	$('#select-user').change(grabUserSelection);		//(b) selects USER
	$('#select-rx').change(grabRxSelection);			//(c) inputs the RX number
	$('#select-otc').change(grabOtcSelection);			//(d) selects OTC
	$('#select-food').change(grabFoodSelection);		//(e) selects FOOD
	$('#select-drink').change(grabDrinkSelection);		//(f) selects DRINK
	$('#select-note').change(grabNoteSelection);		//(g) inputs text NOTE
	$('#select-price').change(grabPriceSelection);		//(h) inputs additional float PRICE
	$('#select-submit').click(grabSubmitSelection);		//(i) clicks button SUBMIT, everything goes under here.

	//===============================================================================================
	//GLOBAL VAR declared. THESE are the VALUES we will RETURN & USE in/after the "SUBMIT" btn.click.
	//===============================================================================================
	var chosenDate;
	var chosenUser;
	var chosenRx;	//var chosenRx = $('#select-rx').val();	//short-hand doesn't work.
	var chosenOtc;
	var chosenFood;
	var chosenDrink;
	var chosenNote;
	var chosenPrice;
	var chosenSubmit;

	//===============================================================================================
	//FUNCTIONS for each of the EVENT listeners
	//===============================================================================================

	/******************************************/
	/*(a) Get DATE*/
	function grabDateSelection(){
		//console.log($(this).val());	//the .change will get the change value
		//chosenDate = 0;
		chosenDate = $('#select-date').val();	//gets the date the use clicks on (change)
		console.log(chosenDate);
	}

	/******************************************/
	/*(b) Get USER*/
	//i. Display Users (from var arrayUser) in the dropdown selection menu.
	arrayUser.forEach(function(userElement, userIndex){
		//console.log(userElement, userIndex);	//test - display each user and its index into console.
		//populates the user selection dropdown (UI) w/ the list of ppl in the arrayUser.
		$('#select-user').append("<option value'" + userElement + "'>" + userElement + "</option>");
	});
	//ii. Get the User Selection that the employee clicked on/chose from the dropdown list.
	function grabUserSelection(){
		//chosenUser = 0;
		chosenUser = $('#select-user').val();	//gets the selected user from the dropdown list
		console.log(chosenUser);
	}

	/******************************************/
	/*(c) Get RX*/
	function grabRxSelection(){
		//chosenRx = 0;
		chosenRx = $('#select-rx').val();		//gets the string/text the user types and clicks away from (change)
		console.log(chosenRx);
	}

	/******************************************/
	/*(d) Get OTC (over the counter)*/
	//i. Display OTC (from var arrayOTC) in the dropdown selection menu.
	arrayOTC.forEach(function(otcElement, otcIndex){
		//console.log(otcElement, otcIndex);	//test - display each OTC and its Index into console.
		$('#select-otc').append("<option value'" + otcElement + "'>" + otcElement + "</option>");
	});
	//ii. Get the OTC Selection that the employee clicked on/chose from the dropdown list.
	function grabOtcSelection(){
		//chosenOtc = 0;
		chosenOtc = $('#select-otc').val();
		console.log(chosenOtc);
	}

	/******************************************/
	/*(e) Get Food*/
	//i. Display Food (from var arrayFood) in the dropdown selection menu.
	arrayFood.forEach(function(foodElement, foodIndex){
		//console.log(foodElement, foodIndex);	//test - display each Food and its Index into console.
		$('#select-food').append("<option value'" + foodElement + "'>" + foodElement + "</option>");
	});
	//ii. Get the Food Selection that the employee clicked on/chose from the dropdown list.
	function grabFoodSelection(){
		//chosenFood = 0;
		chosenFood = $('#select-food').val();
		console.log(chosenFood);
	}

	/******************************************/
	/*(f) Get Drink*/
	//i. Display Drink (from var arrayDrink) in the dropdown selection menu.
	arrayDrink.forEach(function(drinkElement, drinkIndex){
		//console.log(drinkElement, drinkIndex);	//test - display each Drink and its Index into console.
		$('#select-drink').append("<option value'" + drinkElement + "'>" + drinkElement + "</option>");
	});
	//ii. Get the Drink Selection that the employee clicked on/chose from the dropdown list.
	function grabDrinkSelection(){
		//chosenDrink = 0;
		chosenDrink = $('#select-drink').val();
		console.log(chosenDrink);
	}

	/******************************************/
	/*(g) Get NOTE*/
	function grabNoteSelection(){
		//chosenNote = 0;
		chosenNote = $('#select-note').val();	//gets the string/text the user types and clicks away from (change)
		console.log(chosenNote);
	}

	/******************************************/
	/*(h) Get PRICE, needs to be in "type=Float" later*/
	function grabPriceSelection(){
		//chosenPrice = 0;
		chosenPrice = $('#select-price').val();
		console.log(chosenPrice);
	}

	/******************************************/
	/*(i) Clicks SUBMIT*/
	function grabSubmitSelection(){
		event.preventDefault();
		console.log("test-submit button");

		chosenSubmit = ("| date = " + chosenDate + " | user = " + chosenUser + " | RX = " + chosenRx + " | OTC = " + chosenOtc + " | Food = " + chosenFood + " | Drink = " + chosenDrink + " | Note = " + chosenNote + " | Price = $" + chosenPrice + " |");		
		console.log(chosenSubmit);
	
		//This DISPLAYS all User Selected/Inputted field AFTER hitting "SUBMIT" btn.
		$('ul').append('<li class="item-list"><input type="checkbox" class="checkbox-btn"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button><label id="edit-submit"> '+ chosenSubmit +' </label></li>');

		//Clears All Field after "SUBMIT" button is pressed.
		$('input[type=text]').val('');
		$('input[type=float').val('');
		$('select').val('');
		$('input[type=date]').val('');
	}


	//===============================================================================================
	//FUNCTIONS for ADDING New Items into Dropdowns, Existing Arrays for: User,OTC,Food,Drink Items
	//===============================================================================================
	//http://stackoverflow.com/questions/10791811/jquery-get-text-input-fields-value-on-button-clicking-event
	//http://stackoverflow.com/questions/351409/appending-to-array
	//http://stackoverflow.com/questions/1996747/add-new-value-to-an-existing-array-in-javascript
	//http://stackoverflow.com/questions/740195/adding-options-to-a-select-using-jquery-javascript
	//https://www.safaribooksonline.com/library/view/jquery-cookbook/9780596806941/ch10s07.html
	//===============================================================================================
	var btnUser;		//Stores the "New USER" string that was typed after the btn gets pressed.
	var btnOtc;			//Stores the "New OTC" string that was typed after the btn gets pressed.
	var btnFood;		//Stores the "New FOOD" string that was typed after the btn gets pressed.
	var btnDrink;		//Stores the "New DRINK" string that was typed after the btn gets pressed.

	$('#btn-drink').click(function(){
		event.preventDefault();
		btnDrink = $('#add-drink').val();		//gets User input value
		// btnDrink = addDrink;
		arrayDrink.push(btnDrink);
		$('<option/>').attr('value',btnDrink).text(btnDrink).appendTo('#select-drink');		//add's Users input into selection dropdown list
		console.log(btnDrink);
		$('input[type=text]').val('');			//Clears input field after "Add" button is clicked.
	});
	
	$('#btn-food').click(function(){
		event.preventDefault();
		btnFood = $('#add-food').val();			//gets User input value
		// btnFood = addFood;
		arrayFood.push(btnFood);
		$('<option/>').attr('value',btnFood).text(btnFood).appendTo('#select-food');		//add's Users input into selection dropdown list
		console.log(btnFood);
		$('input[type=text]').val('');			//Clears input field after "Add" button is clicked.
	});
	
	$('#btn-otc').click(function(){
		event.preventDefault();
		btnOtc = $('#add-otc').val();			//gets User input value
		// btnOtc = addOtc;
		arrayOTC.push(btnOtc);
		$('<option/>').attr('value',btnOtc).text(btnOtc).appendTo('#select-otc');			//add's Users input into selection dropdown list
		console.log(btnOtc);
		$('input[type=text]').val('');			//Clears input field after "Add" button is clicked.
	});

	$('#btn-user').click(function(){
		event.preventDefault();
		btnUser = $('#add-user').val();			//gets User input value
		// btnUser = addUser;
		arrayUser.push(btnUser);
		// LOL, this line somehow gets the new user that was added from the "Add User" button into the "Select User" selection list.
		$('<option/>').attr('value',btnUser).text(btnUser).appendTo('#select-user');		//add's Users input into selection dropdown list
		console.log(btnUser);
		$('input[type=text]').val('');			//Clears input field after "Add" button is clicked.
	});

	//NOTE: Below is just another way to code it. (A bit longer, and not refactored like above).
	//NOTE: Saving for possible future use and learning.
	// var addUser;
	// var btnUser;
	// $('#add-user').change(addUserSelection);
	// $('#btn-user').click(btnUserSelection);
	// function addUserSelection(){
	// 	addUser = $('#add-user').val();
	// 	console.log(addUser);
	// }
	// function btnUserSelection(){
	// 	event.preventDefault();
	// 	btnUser = addUser;
	// 	console.log(btnUser);
	// }

	//===============================================================================================
	//FUNCTIONS for EDIT & DELETE buttons in the list items
	//===============================================================================================
	//HATED having to use the solution samples. Can't get it to work due to multiple input on.Submit.
	//TRIED to use the below links to make it work and would except for my "chosenSubmit", too many params.
	//http://stackoverflow.com/questions/15850303/how-to-make-editable-list-item-using-jquery
	//http://jsbin.com/ijexak/2/edit?html,js,output
	//http://jsfiddle.net/uenZW/2/
	//http://stackoverflow.com/questions/30492303/editing-and-deleting-dynamically-generated-list-items-in-jquery-todo-list-app
	//https://jsfiddle.net/nndd1byt/7/
	//===============================================================================================
	$('ul').on('click', '.edit-btn', ulEditSelection);
	$('ul').on('blur', '#edit-field', ulClickAwaySave);
	$('ul').on('click', '.delete-btn', ulRemoveItem);

	function ulEditSelection(){
		var itemEdited = $(this).parent().find("label");
		console.log();
		$(itemEdited).replaceWith('<input class"'+itemEdited.attr("for")+'" id="edit-field" type="text" value="'+itemEdited.text()+'">');
	}
	
	function ulClickAwaySave(){
		var valueSaved = $(this).val();
		var value = $(this).attr("class");
		$(this).replaceWith("<label for='"+value+"'>"+valueSaved+"</label>");
	}

	function ulRemoveItem(){
		event.preventDefault();
		$(this).parent().remove();
		//updateCount();
	}

	//===============================================================================================
	//FUNCTIONS for BUTTONS: "DELETE SELECTED" & "DELETE ALL" Listed Items
	//===============================================================================================
	$('.btn-delete-selected').click(btnDeleteSelected);
	$('.btn-delete-all').click(btnDeleteAll);

	function btnDeleteAll(){
		$('ul').empty();
		//updateCount();
	}

	function btnDeleteSelected(){
		$('input[type=checkbox]:checked').parent().remove();
		//updateCount();
	}

	//===============================================================================================
	//FUNCTIONS for BUTTONS: "EXPORT SELECTED" & "EXPORT ALL" Listed Items
	//===============================================================================================
	//EXCEL EXPORT
	//http://stackoverflow.com/questions/29078394/export-list-to-excel-using-jquery
	//https://github.com/rainabba/jquery-table2excel
	//https://jsfiddle.net/dekkard/8f1w6zom/
	//http://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/
	//===============================================================================================
	//TEXT EXPORT
	//http://stackoverflow.com/questions/22084698/how-to-export-source-content-within-div-to-text-html-file
	//https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
	//http://thiscouldbebetter.neocities.org/texteditor.html
	//===============================================================================================
	//NOT WORKING (Extra)
	//===============================================================================================
	$('.btn-export-all').click(function(){
		$('ul').table2excel({
			exclude: ".noExl",
			name: "Results"
		});
	});

	$('.btn-export-selected').click(function(){
		var exportSelected = $('ul')=$('input[type=checkbox]:checked').parent();
		$('ul').exportSelected.table2excel({
			exclude: ".noExl",
			name: "Results"
		});
	});


//NOT: USING COUNTERS or TASK LIST ITEMS.
	//detects when checkbox changes
	// $("ul").on("change", "input[type=checkbox]", toggleComplete);
	// function toggleComplete(){ 
	// 	updateCount();
	// }
	//
	// function updateCount(){
	// 	var complete = $("input[type=checkbox]:checked").length; //assigns the variable "complete" to the number of items checked off checkboxes
	// 	$(".complete-count").text(complete); //updates the text for number of completed items
	// 	var total = $("li").length;  //assigns variable total to the number of list items 
	// 	$(".total-count").text(total); //updates the total count
	// }





/***************CODE FOR LOGIN PAGE*****************/

$("#sign-in").click(function(){
	var email = $("#email").val();
	var password = $("#password").val();
	// Checking for blank fields.
	if( email =='' || password ==''){
		$('input[type="text"],input[type="password"]').css("border","2px solid red");
		$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
		alert("Please fill all fields...!!!!!!");
	}

	else {
		$.post("login.php",{ email1: email, password1:password},
		
	function(data) {
	if(data=='Invalid Email.......') {
$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
}else if(data=='Email or Password is wrong...!!!!'){
$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
alert(data);
} else if(data=='Successfully Logged in...'){
$("form")[0].reset();
$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
} else{
alert(data);
}
});
}
});







});	//END of $(document) JS file