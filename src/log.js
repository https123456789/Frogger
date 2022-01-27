// Log

class Log extends Entity {
	constructor(game, xmovementVelocity, xExpirationPosition, positionVector) {
		super(game);
		this.texture.loadTexture("res/Log.png");
		this.position = positionVector;
		this.width = 20;
		this.height = 20;
		this.xmovementVelocity = xmovementVelocity;
		this.speed = 20;
		this.movementDelay = 10;
		this.xExpirationPosition = xExpirationPosition;
	}
	update() {
		if (this.position.x > this.xExpirationPosition) {
			// Log Expires
			this.game.logs.reverse();
			this.game.logs.pop();
			this.game.logs.reverse();
			this.destroy();
			return;
		}
		if (this.movementDelay < 1) {
			// Move logs
			this.position.x += this.xmovementVelocity * this.speed;
			// Move player
			if (this.game.player.position.y == this.position.y) {
				if (this.game.player.position.x - this.width == this.position.x) {
					this.game.player.moveX(this.xmovementVelocity * this.speed, {

					});
				}
			}
			this.movementDelay = 10;
			this.draw();
			return;
		}
		this.draw();
		this.movementDelay -= 1;
	}
	draw() {
		this.texture.draw(this.position.x, this.position.y);
	}
}