var Display = function() {
	this.draw = function(board) {
		var htmlMap = document.getElementById("game");
		htmlMap.innerHTML = "";
		document.getElementById('turn').innerHTML = 'Alice, first turn is yours.';
		for (var row = 0; row < board.size; row++) {
			for (var column = 0; column < board.size; column++) {
				var box = document.createElement("div");
				box.setAttribute("class", "box");
				
				switch(board.gameMap[row][column])
				{
					case board.GRASS:
					box.className += " grass";
					break;
					case board.STONE:
					box.className += " stone";
					break;
					case board.PLAYERONE:
					box.className += " playerOne";
					break;
					case board.PLAYERTWO:
					box.className += " playerTwo";
					break;
					case board.WEAPONONE:
					box.className += " weaponOne";
					break;
					case board.WEAPONTWO:
					box.className += " weaponTwo";
					break;
					case board.WEAPONTHREE:
					box.className += " weaponThree";
					break;
				}
				
				
				htmlMap.append(box);
			}
		}

		
	}
	this.updateDashboard = function(board) {
		document.getElementById('turn').innerHTML = "it's " + board.activePlayer.name + " turn </br> &  " + board.turns + " left.";

		document.getElementById('alicehealth').innerHTML = 'HEALTH: ' + board.playerOne.health + '%';
		document.getElementById('aliceweapon').innerHTML = 'WEAPON: ' + board.playerOne.weapon.name;
		document.getElementById('alicedamage').innerHTML = 'DAMAGE: ' + board.playerOne.weapon.damage;
		
		document.getElementById('bobhealth').innerHTML = 'HEALTH: ' + board.playerTwo.health + '%';
		document.getElementById('bobweapon').innerHTML = 'WEAPON: ' + board.playerTwo.weapon.name;
		document.getElementById('bobdamage').innerHTML = 'DAMAGE: ' + board.playerTwo.weapon.damage;
		

		if(board.playerOne.defend == true) {
			document.getElementById('bob2').className = 'text-center defendMode';
			$("#modebob").show();
		} 
		else {
			document.getElementById('bob2').className = 'text-center';
			$("#modebob").hide();
		}
		if(board.playerTwo.defend == true) {
			document.getElementById('alice2').className = 'text-center defendMode';
			$("#modealice").show();
		} 
		else {
			document.getElementById('alice2').className = 'text-center';
			$("#modealice").hide();
		}
	}		

}






