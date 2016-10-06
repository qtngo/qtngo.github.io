/*......................................................
.. PsuedoCode - Step by Step Plans
........................................................
.. 1) Create Layout (keep it basic)
.. 2) Create/Declare vars & arrays.
.. 3) Create Dropdown and buttons (3x buttons)
.. 4) Execute the pressing of the buttons
.. 5) Remember to add Default Event
.. 6) Link button-click to dropdown
.. 7) Do a condition check for which pokemon is chosen.
.. 8) Repeat 5 to 7 for each button.
......................................................*/

$(document).ready(function(){
//console.log("test");

//======================================================
//Declare Array of Pokemons
//======================================================
var arrayPokemon = [
	"Choose Your Pokemon",
	"Bulbasaur",
	"Charmander",
	"Squirtle",
	"Pikachu",
	"Jigglypuff",
	"Psyduck",
	"Slowpoke",
	"Magikarp",
	"Eevee"
];

// var pokemon = $('#new-pokemon').val();
// console.log(pokemon);

//======================================================
//Display the Pokemon selection dropdown list
//======================================================
arrayPokemon.forEach(function(pokemonElement, pokemonIndex){
	console.log(pokemonElement, pokemonIndex);

	//this line displays the pokemon's in the dropdown list	
	$('select').append("<option value='"+pokemonElement+"'>"+pokemonElement+"</option>");
});

//======================================================
//Click on the "ADD" button
//======================================================
$('#btn-add').click(addSelectedPokemon);

//======================================================
//ADD button Function
//======================================================
function addSelectedPokemon(){
	event.preventDefault();

	//SO IMPORTANT!!!
	//"ADD" btn executed (and links to selection screen)
	var pokemon = $('#new-pokemon').val();
	console.log(pokemon);

	if (pokemon=="Bulbasaur"){
		$('body').attr('class','bg-bulbasaur');
		$('#pick-pokemon').text("Bulbasaur");
		console.log("bg = Bulbasaur");
	}
	else if(pokemon=="Charmander"){
		$('body').attr('class','bg-charmander');
		$('#pick-pokemon').text("Charmander");
		console.log("bg = Charmander");	
	}
	else if(pokemon=="Squirtle"){
		$('body').attr('class','bg-squirtle');
		$('#pick-pokemon').text("Squirtle");
		console.log("bg = Squirtle");	
	}
	else if(pokemon=="Pikachu"){
		$('body').attr('class','bg-pikachu');
		$('#pick-pokemon').text("Pikachu");
		console.log("bg = Pikachu");	
	}
	else if(pokemon=="Jigglypuff"){
		$('body').attr('class','bg-jigglypuff');
		$('#pick-pokemon').text("Jigglypuff");
		console.log("bg = Jigglypuff");	
	}
	else if(pokemon=="Psyduck"){
		$('body').attr('class','bg-psyduck');
		$('#pick-pokemon').text("Psyduck");
		console.log("bg = Psyduck");	
	}
	else if(pokemon=="Slowpoke"){
		$('body').attr('class','bg-slowpoke');
		$('#pick-pokemon').text("Slowpoke");
		console.log("bg = Slowpoke");	
	}
	else if(pokemon=="Magikarp"){
		$('body').attr('class','bg-magikarp');
		$('#pick-pokemon').text("Magikarp");
		console.log("bg = Magikarp");	
	}
	else if(pokemon=="Eevee"){
		$('body').attr('class','bg-eevee');
		$('#pick-pokemon').text("Eevee");
		console.log("bg = Eevee");	
	}
	else {
		//display snorlax if first line '0' is chosen.
		$('body').attr('class','bg-snorlax');
		$('#pick-pokemon').text("Snorlax");
		console.log("bg = Snorlax");	
	}
	console.log("ADD = Finished LOOP!");

};//END of ADD button Function


//======================================================
//Click on the "EVOLVE" button
//======================================================
$('#btn-evolve').click(evolveSelectedPokemon);

//======================================================
//EVOLVE lvl 2 button Function
//======================================================
function evolveSelectedPokemon(){
	event.preventDefault();
	console.log("test-evolve btn");
	
	var pokemon = $('#new-pokemon').val();
	console.log(pokemon);
	console.log("test3");
	switch(pokemon){
		case 'Bulbasaur':
			$('body').attr("class","bg-ivysaur");
			$('#pick-pokemon').text("Ivysaur");
			console.log("evolveBG = Ivysaur");
			break;
		case 'Charmander':
			$('body').attr("class","bg-charmeleon");
			$('#pick-pokemon').text("Charmeleon");
			console.log("evolveBG = Charmeleon");
			break;
		case 'Squirtle':
			$('body').attr("class","bg-wartortle");
			$('#pick-pokemon').text("Wartortle");
			console.log("evolveBG = Wartortle");
			break;
		case 'Pikachu':
			$('body').attr("class","bg-raichu");
			$('#pick-pokemon').text("Raichu");
			console.log("evolveBG = Raichu");
			break;
		case 'Jigglypuff':
			$('body').attr("class","bg-wigglytuff");
			$('#pick-pokemon').text("Wigglytuff");
			console.log("evolveBG = Wigglytuff");
			break;
		case 'Psyduck':
			$('body').attr("class","bg-golduck");
			$('#pick-pokemon').text("Golduck");
			console.log("evolveBG = Golduck");
			break;
		case 'Slowpoke':
			$('body').attr("class","bg-slowbro");
			$('#pick-pokemon').text("Slowbro");
			console.log("evolveBG = Slowbro");
			break;
		case 'Magikarp':
			$('body').attr("class","bg-gyarados");
			$('#pick-pokemon').text("Gyarados");
			console.log("evolveBG = Gyarados");
			break;
		case 'Eevee':
			$('body').attr("class","bg-flareon");
			$('#pick-pokemon').text("Flareon");
			console.log("evolveBG = Flareon");
			break;
		default:
			//None Selected, default to Snorlax
			$('body').attr("class","bg-pokeball");
			$('#pick-pokemon').text("...zZzZzZzzZ");
			console.log("evolveBG = pokeball");
			break;
	}//End Switch (EVOLVE2)
	console.log("EVOLVE lvl2 = Finished LOOP!");

};//END of EVOLVE lvl2 button Function


//======================================================
//Click on the "FINAL EVOLUTION" button
//======================================================
$('#btn-final').click(finalSelectedPokemon);

//======================================================
//FINAL EVOLUTION button Function
//======================================================
function finalSelectedPokemon(){
	event.preventDefault();
	console.log("test-final evo btn");
	
	var pokemon = $('#new-pokemon').val();
	console.log(pokemon);
	console.log("test3");
	switch(pokemon){
		case 'Bulbasaur':
			$('body').attr("class","bg-venusaur");
			$('#pick-pokemon').text("Venusaur");
			console.log("finalBG = Venusaur");
			break;
		case 'Charmander':
			$('body').attr("class","bg-charizard");
			$('#pick-pokemon').text("Charizard");
			console.log("finalBG = Charizard");
			break;
		case 'Squirtle':
			$('body').attr("class","bg-blastoise");
			$('#pick-pokemon').text("Blastoise");
			console.log("finalBG = Blastoise");
			break;
		case 'Pikachu':
			$('body').attr("class","bg-pokeball");
			$('#pick-pokemon').text("No 3rd Level Evolution.");
			console.log("finalBG = pokeball");
			break;
		case 'Jigglypuff':
			$('body').attr("class","bg-pokeball");
			$('#pick-pokemon').text("No 3rd Level Evolution.");
			console.log("finalBG = pokeball");
			break;
		case 'Psyduck':
			$('body').attr("class","bg-pokeball");
			$('#pick-pokemon').text("No 3rd Level Evolution.");
			console.log("finalBG = pokeball");
			break;
		case 'Slowpoke':
			$('body').attr("class","bg-slowking");
			$('#pick-pokemon').text("Slowking");
			console.log("finalBG = Slowking");
			break;
		case 'Magikarp':
			$('body').attr("class","bg-pokeball");
			$('#pick-pokemon').text("No 3rd Level Evolution.");
			console.log("finalBG = pokeball");
			break;
		case 'Eevee':
			$('body').attr("class","bg-jolteon");
			$('#pick-pokemon').text("Flareon | Jolteon | Vaporeon");
			console.log("finalBG = Jolteon");
			break;
		default:
			//None Selected, default to Pokeball
			$('body').attr("class","bg-pokeball");
			$('#pick-pokemon').text("Nada. Zip. Zero. Next!");
			console.log("finalBG = pokeball");
			break;
	}//End Switch (Final Evo)
	console.log("FINAL EVO lvl3 = Finished LOOP!");

};//END of FINAL EVOLUTION button Function

});

