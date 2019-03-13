	var Player = function(id, name, health) {
		this.id = id;
		this.name = name;
		this.health = health;
		this.position = {};
		this.alive = true;
		this.weapon = new Weapon(-1, 'punch', 10);
		this.setPosition = function (x,y) {
			this.position = {
				'X': x,
				'Y': y 
			}
		}
		this.defend = false;
		this.takeDamage = function(damage) {
			if(this.defend == true) {
				this.defend = false;
				this.health -= damage / 2;
			} else {
				this.health -= damage;
			}
			if (this.health <= 0) {
				this.alive = false;
			}
		}
		
	}


