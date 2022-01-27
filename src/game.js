// Game

class Game {
	constructor(ctx) {
		this.ctx = ctx;
		//this.background = new Background(this);
		this.entityCount = 0;
		this.screenShowed = false;
		this.screenShowStartTime = null;
		this.logoImage = null;
		this.screenShowTimeLength = 2000;
		this.tileRows = [];
		this.mapLoader = new MapLoader(this);
		this.player = new Player(this);
		this.clock = new Clock(this, (1000 / 60));
		// Inits
		this.initCanvas();
	}
	initCanvas() {
		this.ctx.canvas.width = 500;
		this.ctx.canvas.height = 300;
	}
	update() {
		// Logo screen
		if (!this.screenShowed) {
			this.showScreen();
			return false;
		}
		// Clear canvas
		this.ctx.fillStyle = "rgb(0, 0, 0)";
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		// Main
		if (!this.mapLoader.selected) {
			console.log("Selecting map.");
			this.mapLoader.selectMap();
		}
		if (!this.mapLoader.loaded) {
			console.log("Loading map.");
			this.mapLoader.generateMap();
		}
		this.updateDebugInfo();
		// Update tiles
		for (var i = 0; i < this.tileRows.length; i++) {
			var row = this.tileRows[i];
			for (var q = 0; q < row.tiles.length; q++) {
				row.tiles[q].update();
				//console.log(row.tiles[q].position);
			}
		}
		// Update player
		this.player.update();
	}
	updateDebugInfo() {
		document.getElementById("entityCount").innerHTML = "Entity Count: " + this.entityCount;
	}
	showScreen() {
		if (!this.screenShowStartTime) {
			this.screenShowStartTime = new Date().getTime();
		}
		var ntime = new Date().getTime();
		if ((ntime - this.screenShowStartTime) > this.screenShowTimeLength) {
			this.screenShowed = true;
		}
		this.ctx.fillStyle = new Background(this).skyColor;
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.showLogo();
	}
	showLogo() {
		if (!this.logoImage) {
			this.logoImage = new Image;
			this.logoImage.src = "res/Logo.png";
			var self = this;
			this.logoImage.onload = () => {
				self.ctx.drawImage(this.logoImage, 0, 0);
			};
		} else {
			this.ctx.drawImage(this.logoImage, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		}
	}
}