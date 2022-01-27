// Player class

class Player extends Entity {
	constructor(game) {
		super(game);
		this.imagesrc = "res/Frog.png";
        this.texture = new ImageTexture(game);
        this.texture.loadTexture(this.imagesrc);
		this.position = {
			x: 240,
			y: 280
		};
		this.width = 20;
		this.height = 20;
		this.speed = 20;
    }
    update(){
        this.render();
    }
    render(){
        this.texture.draw(this.position.x, this.position.y);        
    }
	moveUp() {
		// Bounds check
		var amt = this.speed;
		if ((this.position.y - amt) < 0) {
			return;
		}
		this.position.y -= amt;
	}
	moveDown() {
		// Bounds check
		var amt = this.speed;
		if ((this.position.y + amt) > (this.game.ctx.canvas.height - this.height)) {
			return;
		}
		this.position.y += amt;
	}
	moveLeft() {
		// Bounds check
		var amt = this.speed;
		if ((this.position.x - amt) < 0) {
			return;
		}
		this.position.x -= amt;
	}
	moveRight() {
		// Bounds check
		var amt = this.speed;
		if ((this.position.x + amt) > (this.game.ctx.canvas.width - this.width)) {
			return;
		}
		this.position.x += amt;
	}
	moveX(amt, options) {
		if ((this.position.x + amt) > (this.game.ctx.canvas.width - this.width)) {
			if (options.dieOnFail) {
				// To Do: Kill player
			} else {
				return;
			}
		}
		this.position.x += amt;
	}
}