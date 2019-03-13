
var board;
var display;


function start() {
	board = new Board(10);
	display = new Display();
	board.start();
	display.draw(board);
	display.updateDashboard(board);
	initBattle();
};

window.addEventListener('keydown', keyhandler);
start();
function keyhandler(e) {
	e.preventDefault();
	var oldX = board.activePlayer.position.X;
	var oldY = board.activePlayer.position.Y;
	switch(e.key) {
		case 'ArrowUp':
		var newX = oldX - 1;
		var newY = oldY;
		move(oldX, oldY, newX, newY);
		break;
		case 'ArrowDown':
		var newX = oldX + 1;
		var newY = oldY;
		move(oldX, oldY, newX, newY);
		break;
		case 'ArrowLeft':
		var newX = oldX;
		var newY = oldY - 1;
		move(oldX, oldY, newX, newY);
		break;
		case 'ArrowRight':
		var newX = oldX;
		var newY = oldY + 1;
		move(oldX, oldY, newX, newY);
		break;
	}
}




function move (oldX, oldY, newX, newY) {
	var move = false; 
		// check if new positions are within the boundries
		// check if new position has grass 
		if(newX >= 0 && newY >=0 && newX < board.size && newY < board.size) { 
			if(board.gameMap[newX][newY] === board.GRASS) {
				board.gameMap[newX][newY] = board.activePlayer.id;
				board.activePlayer.setPosition(newX, newY);
				board.gameMap[oldX][oldY] = board.GRASS;
				move = true;
				
			} else if (board.gameMap[newX][newY] >= board.WEAPONONE && board.gameMap[newX][newY] <= board.WEAPONTHREE) {
				// take current weapon from the place
				var oldWeapon = board.activePlayer.weapon.id; 
				board.activePlayer.weapon = board.weapons[board.gameMap[newX][newY] - 4]; 
				board.gameMap[newX][newY] = board.activePlayer.id;
				board.activePlayer.setPosition(newX, newY);
				if(oldWeapon == -1) {
					board.gameMap[oldX][oldY] = board.GRASS;
				} else {
					board.gameMap[oldX][oldY] = oldWeapon;
				}

				move = true;
			}
			if(move == true) {
				update();
				if(checkBattleCon(board.activePlayer.position.X, board.activePlayer.position.Y) == true)   {
					board.battle = true;
					battle();
					

				} else {
					board.decreaseTurn();
					update();
				}

			}
		}
	}

	function update() {
		display.draw(board);
		display.updateDashboard(board);
	}

	function battle() {
		$('#battle').dialog('open');
		
	}

	function initBattle() {
		$( "#battle" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
				"Fight": function() {
					fight(this);

					
				},
				"Defend": function() {
					defend(this);

				
			},
			"Stop The Battle": function() {
				$(this).dialog('close');
			}
		}

	});
	}
	