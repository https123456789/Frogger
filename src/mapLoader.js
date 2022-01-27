class MapLoader {
	constructor(game) {
		this.game = game;
		this.loaded = false;
		this.selected = false;
	}
	selectMap() {
		var testel = document.getElementById("maps/default.froggermap");
		if (testel) {
			console.log("Map already selected.");
			return;
		}
		var element = document.createElement("script");
		element.src = "maps/default.froggermap";
		element.id = "maps/default.froggermap";
		document.getElementById("maps").appendChild(element);
		this.selected = true;
	}
	generateMap() {
		/*
		for (var y = 0; y < this.game.ctx.canvas.height; y+=20) {
			var newRow = new TileContainer(this.game);
			for (var x = 0; x < this.game.ctx.canvas.width; x+=20) {
				var newTile = new EmptyTile(this.game, new Vec(x, y));
				newRow.addTile(newTile);
			}
			this.game.tileRows.push(newRow);
		}
		*/
		if (!window.map) {
			return;
		}
		for (var rowId = 0; rowId < window.map.map.rows.length; rowId++) {
			var row = window.map.map.rows[rowId];
			var newRowContainer = new TileContainer(this.game);
			for (var tileId = 0; tileId < row.tiles.length; tileId++) {
				var tile = row.tiles[tileId];
				var unknown = false;
				if (!tile.position || !tile.type) {
					console.log("Skipped tile for invalid data.");
					continue;
				}
				switch (tile.type) {
					case "Grass":
						var newTile = new GrassTile(this.game, tile.position);
						break;
					case "Road":
						var newTile = new RoadTile(this.game, tile.position);
						break;
					case "Water":
						var newTile = new WaterTile(this.game, tile.position);
						break;
					default:
						console.log("Unknow type '" + tile.type + "' defined at (" + tile.position.x + ", " + tile.position.y + ").");
						var newTile = new UnknownTypeTile(this.game, tile.position);
						break;
						tile.type = "unknown";
				}
				console.log("New tile of type " + tile.type + " at " + newTile.position.x + ", " + newTile.position.y);
				newRowContainer.addTile(newTile);
			}
			this.game.tileRows.push(newRowContainer);
		}
		this.loaded = true;
	}
}