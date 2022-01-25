// Cloud class

class Cloud extends Entity {
	constructor(game) {
		super(game);
		this.position = {
			x: -1,
			y: Math.floor((Math.random() * 10))
		}
		this.xspeed = 0.25;
		this.yspeed = 0;
		this.texture.loadTexture("res/Cloud.png");
	}
	update() {
		// Update position
		this.position.x += this.xspeed;
		this.position.y += this.yspeed;
		// Draw
		this.draw();
	}
	draw() {
		// Guard statment incase image hasn't loaded
		if (!this.texture.imageHadLoaded) return;

		this.game.ctx.drawImage(this.texture.image, this.position.x, this.position.y);		
	}
}

// Background class

class Background {
	constructor(game) {
		this.game = game;
		this.skyColor = "rgb(0, 255, 200)";
		this.cloudColor = "rgb(200, 200, 200)";
		this.clouds = [];
	}
	update() {
		// Update sky
		this.game.ctx.fillStyle = this.skyColor;
		this.game.ctx.fillRect(0, 0, this.game.ctx.canvas.width, this.game.ctx.canvas.height);
		// Update clouds
		this.updateClouds();
	}
	updateClouds() {
		if (this.clouds.length < 10) {
			if (this.clouds.length > 0) {
				var lastCloud = this.clouds[this.clouds.length - 1];
				if (lastCloud.position.x > (this.game.ctx.canvas.width * 0.2)) {
					// Create new cloud
					var newCloud = new Cloud(this.game);
					this.clouds.push(newCloud);
				}
			} else {
				// Create new cloud
				var newCloud = new Cloud(this.game);
				this.clouds.push(newCloud);
			}
		}
		// Update clouds
		for (var i = 0; i < this.clouds.length; i++) {
			this.clouds[i].update();
			var lastCloud = this.clouds[this.clouds.length - 1];
			if ((this.clouds[i].position.x + lastCloud.texture.image.width) > this.game.ctx.canvas.width) {
				// Cloud is off screen
				this.clouds.reverse();
				(this.clouds.pop()).destroy();
				this.clouds.reverse();
			}
		}
	}
}