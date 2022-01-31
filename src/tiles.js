// Tiles

class Tile extends EventTriggerable {
	constructor(game, positionVector, bgcolor = "rgb(200, 200, 200)") {
		super(game);
		this.position = positionVector;
		this.width = 20;
		this.height = 20;
		this.bgcolor = bgcolor;
		this.texture = new SolidColorTexture(this.game, this.bgcolor);
	}
	update() {
		this.draw();
	}
	draw() {
		this.drawTextue();
	}
	drawTextue() {
		this.game.ctx.fillStyle = this.bgcolor;
		this.game.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
    get rect (){
        return new Rect(this.position.x, this.position.y, this.width, this.height)
    }
}

class SolidColorTile extends Tile {
	constructor(game, positionVector, color) {
		super(game, positionVector, color);
	}
}

class ImageTextureTile extends Tile {
	constructor(game, positionVector, imageSourcePath) {
		super(game, positionVector, "rgb(0, 0, 0)");
		this.imageSourcePath = imageSourcePath;
		this.texture = new ImageTexture(this.game);
		this.texture.loadTexture(this.imageSourcePath);
	}
	draw() {
		this.texture.drawTexture(this.position.x, this.position.y);
	}
}

class GrassTile extends SolidColorTile {
	constructor(game, positionVector) {
		super(game, positionVector, "rgb(0, 255, 0)");
	}
}

class RoadTile extends ImageTextureTile {
	constructor(game, positionVector) {
		super(game, positionVector, "res/Road.png");
	}
}

class WaterTile extends ImageTextureTile {
	constructor(game, positionVector) {
		super(game, positionVector, "res/Water.png");
	}
	playerIsOn() {
		//this.game.player.die();
		super.playerIsOn();
	}
}

class WaterSpawnerTile extends WaterTile {
	constructor(game, positionVector, spawnerType, xmovementVelocity, options) {
		super(game, positionVector);
		this.spawner = {
			xmovementVelocity: xmovementVelocity,
			type: spawnerType
		};
		this.spawnCountDown = 20;
		this.options = options;
	}
	update() {
		if (this.spawnCountDown < 1) {
			var newLog = new Log(
				this.game,
				this.spawner.xmovementVelocity,
				this.game.ctx.canvas.width,
				{
					x: this.position.x,
					y: this.position.y
				}
			);
			
			this.game.logs.push(newLog);
			if (this.options.randomOffset && this.options.randomOffsetModifier) {
				this.spawnCountDown = 20 + Math.floor((this.options.randomOffsetModifier * Math.random()));
			} else {
				this.spawnCountDown = 20;
			}
			return;
		}
		super.update();
		this.spawnCountDown -= 1;
	}
}

class UnknownTypeTile extends ImageTextureTile {
	constructor(game, positionVector) {
		super(game, positionVector, "res/Unknown.png");
	}
}

// Tile row container

class TileContainer {
	constructor(game) {
		this.game = game;
		this.tiles = [];
	}
	addTile(tile) {
		this.tiles.push(tile);
	}
}