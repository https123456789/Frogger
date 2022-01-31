// Entity Surface class

class ImageTexture {
	constructor(game) {
		this.game = game;
		this.src = null;
		this.image = new Image;
		this.imageHadLoaded = false;
	}
	loadTexture(src) {
		this.src = src;
		this.image.src = src;
		var self = this;
		this.image.onload = () => {
			self.imageHadLoaded = true;
		}
	}
	drawTexture(x, y) {
		this.game.ctx.drawImage(this.image, x, y);
	}
    draw(x, y){
        this.game.ctx.drawImage(this.image, x, y);
    }
}

class SolidColorTexture {
	constructor(game, color) {
		this.game = game;
		this.color = color;
	}
}

// Base Entity class

class Entity extends EventTriggerable{
	constructor(game) {
		super(game);
		this.texture = new ImageTexture(this.game);
		this.game.entityCount += 1;
		this.position = {
			x: 0,
			y: 0
		};
		//this.rect = new Rect();
	}
	update() {

	}
	triggerEvent(eventName) {
		switch (eventName) {
			case "playerIsOn":
				this.playerIsOn();
				break;
		}
	}
	playerIsOn() {
		
	}
	destroy() {
		this.game.entityCount -= 1;
		delete this;
	}
}

class Car extends Entity {
	constructor(game) {
		super(game);
        this.position = Vec(0, 0);
        this.velocity = Vec3(0, 1, 2)
	}
    update(){
        //this.position
    }
}