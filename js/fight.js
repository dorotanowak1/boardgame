
function checkPlayer(x,y) {
	if(x >= 0 && y >=0 && x < board.size && y < board.size) {
		if (board.gameMap[x][y] == board.playerOne.id || board.gameMap[x][y] == board.playerTwo.id) {
			return true;
		} else {
			return false;
		}
	}
} 


function checkBattleCon(x,y) {
	
	/* var up = [x-1, y];
	var down = [x+1, y];
	var left = [x, y-1];
	var right = [x, y+1];
	*/

	if(checkPlayer(x-1, y) == true || 
		checkPlayer(x+1, y) == true ||
		checkPlayer(x, y-1) == true || 
		checkPlayer(x, y+1) == true ) {
		return true;
} else {
	return false;
}
}





function fight(thisDialog) {
	board.otherPlayer().takeDamage(board.activePlayer.weapon.damage);
	display.draw(board);
	display.updateDashboard(board);
	board.decreaseTurn();
	display.draw(board);
	display.updateDashboard(board);
	$(thisDialog).dialog('close');
	if(board.otherPlayer().alive == false) {
		document.getElementById('won').innerHTML = board.activePlayer.name + ' has won the game.';
		$( function() {
			$( "#gameover" ).dialog({
				resizable: false,
				height: "auto",
				width: 500,
				modal: true,
				buttons: {
					"Play again": function() {
						start();
						$( this ).dialog("close");
					},
					"Close": function() {
						$( this ).dialog( "close" );
					}
				}
			});
		} );
	};
	if (board.otherPlayer().alive == true) {
		battle(); }
		else {
			return;
		}
	}



	function defend() {
		board.activePlayer.defend = true;
		display.draw(board);
		display.updateDashboard(board);
		board.decreaseTurn();
		display.draw(board);
		display.updateDashboard(board);
		$(thisDialog).dialog('close');
		battle();
	}


