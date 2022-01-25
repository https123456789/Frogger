// Tiles

class Tile {
	constructor(game) {
		this.game = game;
		this.position = {
			x: 0,
			y: 0
		};
		this.width = 20;
		this.height = 20;
		this.bgcolor = "rgb(200, 200, 200)";
	}
}

class GrassTile extends Tile {
	constructor(game) {
		super(game);
	}
	update() {
		this.draw;
	}
	draw() {
		this.game.ctx.fillStyle = this.bgcolor;
		this.game.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}