// Game

class Game {
	constructor(ctx) {
		this.ctx = ctx;
		this.background = new Background(this);
	}
	update() {
		this.background.update();
	}
}