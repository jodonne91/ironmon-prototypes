//javascript
$(document).on('ready', function(){


	game = new Game('lefty', 'righter');
	game.turn = true;

	switchTurn(game.turn);

	attack = new Action();
	simple = new Simple();
	charge = new Charge();
	leech = new Leech();


	selectChoice();


})

var game;
var attack;
var simple;
var charge;
var leech;



var selectChoice = function(){

	$('.right-button').click(function(evt){
		var choice = evt.currentTarget.id
		makeMove(game.right, game.left, choice)
	})

	$('.left-button').click(function(evt){
		var choice = evt.currentTarget.id
		makeMove(game.left, game.right, choice)
	})



}

 var makeMove = function(player1, player2, act) {

 	if(game.turn){
 		if(player1 === game.left){
 			return;
 		}
 	}
 	else{
 		if(player2 === game.left){
 			return;
 		}
 	}
 	switch(act){
 		case 'attack':
	 		player1.action(player2, attack);
	 		break;
	 	case 'simple':
	 		player1.action(player2, simple);
	 		break;
	 	case 'charge':
	 		player1.action(player2, charge);
	 		break;
	 	case 'leech':
	 		player1.action(player2, leech);
	 		break;
	 	case 'heal':
	 		player1.heal();
 	}

 	switchTurn();

 }

var switchTurn = function() {

	if(game.turn){
		$('.turn-right').animate({left:'-300px'},700)
		$('.turn-left').animate({right:'30px'},700)
		$('.turn-left').removeClass('hidden')
		$('.turn-right').addClass('hidden')
	}
	else {
		$('.turn-right').animate({left:'30px'},700)
		$('.turn-left').animate({right:'-300px'},700)
		$('.turn-right').removeClass('hidden')
		$('.turn-left').addClass('hidden')
	}

	game.takeTurn();
	setStats();
	return

}

var chargedResult = function(player){
	if (player.charged){
		return "GOOOOO!!!!"
	}
	return "nooo..."
}

var setStats = function(){

	var player1 = game.left;
	var player2 = game.right;

	$('.stats').html("");

	var source   = $("#stats-template").html();
	var template = Handlebars.compile(source);

	var statsObjLeft = {
		name: player1.name,
		health: player1.health,
		power: player1.power,
		charged: chargedResult(player1),
		side: "left"
	}

	var statsObjRight = {
		name: player2.name,
		health: player2.health,
		power: player2.power,
		charged: chargedResult(player2),
		side: "right"
	}

	$(".right-stats").append(template(statsObjRight))
	$(".left-stats").append(template(statsObjLeft))



}