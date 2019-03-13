var Board = function (size) {
	this.size = size;
	this.gameMap = [];
	this.GRASS = 0;
	this.STONE = 1;
	this.PLAYERONE = 2;
	this.PLAYERTWO = 3; 
	this.WEAPONONE = 4;
	this.WEAPONTWO = 5;
	this.WEAPONTHREE = 6;
	this.FULL_HEALTH = 100;
	this.LOW_DAMAGE = 15;
	this.MEDIUM_DAMAGE = 20;
	this.HIGH_DAMAGE = 25;
	this.MAX_TURNS = 3;
	this.weaponOne = new Weapon(this.WEAPONONE, 'hammer', this.LOW_DAMAGE);
	this.weaponTwo = new Weapon(this.WEAPONTWO, 'sward', this.MEDIUM_DAMAGE);
	this.weaponThree = new Weapon(this.WEAPONTHREE, 'axe', this.HIGH_DAMAGE);
	this.playerOne = new Player(this.PLAYERONE, 'Alice', this.FULL_HEALTH);
	this.playerTwo = new Player(this.PLAYERTWO, 'Bob', this.FULL_HEALTH);
	this.players = [this.playerOne, this.playerTwo];
	this.weapons = [this.weaponOne, this.weaponTwo, this.weaponThree];
	this.activePlayer = this.playerOne;
	this.turns = this.MAX_TURNS;
	this.battle = false;

	this.otherPlayer = function() {
		if(this.activePlayer.id == this.playerOne.id) {
			return this.playerTwo;
		} else {
			return this.playerOne;
		}
	}
	
	this.switchPlayers = function() {
		this.turns = this.MAX_TURNS;
		if(this.activePlayer.id == this.playerOne.id) {
			
			this.activePlayer = this.playerTwo;
		} else {
			this.activePlayer = this.playerOne;
			
			
		}
		if(checkBattleCon(this.activePlayer.position.X, this.activePlayer.position.Y) == true)   {
			this.battle = true;
			battle();
			

		}
	} 
	this.decreaseTurn = function () { 
				this.turns -= 1;
				if(this.turns <= 0 && board.otherPlayer().alive == true) {
					this.switchPlayers();

				}
			}

			this.start = function () {
				this.genGrass();
				this.genStone();
				this.genPlayers();
				this.genWeapons();

			}


			this.genGrass = function () {
				this.gameMap = [];
				for (i = 0; i < this.size; i++) {
					var row = [];
					for (j = 0; j < this.size; j++) {
						row.push(this.GRASS);
					}
					this.gameMap.push(row);
				}
			}

			this.genPlayers = function () {
				var noPlayers = this.players.length;
				var i = 0;
				while (i < noPlayers) {
					var position = this.randomPosition();
					if (this.gameMap[position.x][position.y] == this.GRASS) {
						this.gameMap[position.x][position.y] = this.players[i].id;
						this.players[i].setPosition(position.x, position.y);
						i++;
					}
				}
			}

			this.randomPosition = function() {
				var x = Math.floor(Math.random() * this.size);
				var y = Math.floor(Math.random() * this.size);
				var position = {
					"x": x, 
					"y": y 
				}
				return position;
			}


			this.genWeapons = function () {
				var noWeapons = this.weapons.length;
				var i = 0;
				while (i < noWeapons) {
					var position = this.randomPosition();
					if (this.gameMap[position.x][position.y] == this.GRASS) {
						this.gameMap[position.x][position.y] = this.weapons[i].id;
						i++;
					}
				}
			}


			this.genStone = function () {

				var noStone = Math.floor(0.1 * this.size * this.size);
				var i = 0;
				while (i < noStone) {
					var position = this.randomPosition();
					if (this.gameMap[position.x][position.y] == this.GRASS) {
						this.gameMap[position.x][position.y] = this.STONE;
						i++;
					}
				}
			}


		}