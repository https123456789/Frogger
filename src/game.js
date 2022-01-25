// Game

class Game {
	constructor(ctx) {
		this.ctx = ctx;
		this.background = new Background(this);
		this.entityCount = 0;
		this.screenShowed = false;
		this.screenShowStartTime = null;
		this.logoImage = null;
		this.screenShowTimeLength = 5000;
	}
	update() {
		if (!this.screenShowed) {
			this.showScreen();
			return;
		}
		this.background.update();
		this.updateDebugInfo();
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