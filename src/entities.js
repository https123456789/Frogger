// Entity Surface class

class Texture {
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
}

// Base Entity class

class Entity {
	constructor(game) {
		this.game = game;
		this.texture = new Texture(this.game);
		this.game.entityCount += 1;
	}
	update() {

	}
	destroy() {
		this.game.entityCount -= 1;
		delete this;
	}
}

class Car extends Entity {
	constructor(game) {
		super(game);
        this.position = Vec(20, 30);
	}
    update(){
    
    }
}