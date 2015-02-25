//javascript
$(document).on('ready', function(){


	game = new Game('lefty', 'righter');

	switchTurn(game.turn)


})

var game;




var selectChoice = function(){

	var choice;

	$('.button').click(function(evt) {
		choice = evt.currentTarget.innerText;
	})

	console.log(choice);

	return choice;

}

var switchTurn = function(turn) {

	if(turn){
		$('.turn-right').animate({left:'-300px'},700)
		$('.turn-left').animate({right:'30px'},700)
		return
	}

	$('.turn-right').animate({left:'30px'},700)
	$('.turn-left').animate({right:'-300px'},700)
	return

}