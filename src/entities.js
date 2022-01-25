// Entity Surface class

class Texture {
	constructor() {
		this.src = null;
		this.image = new Image;
		this.imageHadLoaded = false;
	}
	loadTexture(src) {
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
		this.texture = new Texture();
	}
}