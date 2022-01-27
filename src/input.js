class KeyboardInput {
	constructor(game) {
		this.game = game;
		window.addEventListener("keydown", (event) => {
			this.keydown(event);
		});
		window.addEventListener("keyup", (event) => {
			this.keyup(event);
		});
		this.keys = {
			w: false,
			s: false,
			a: false,
			d: false,
		};
	}
	keydown(event) {
		console.log("Keydown: " + event.key);
		this.keys[event.key] = true;
	}
	keyup(event) {
		console.log("Keyup: " + event.key);
		//this.keys[event.key] = false;
	}
	clearKey(key) {
		this.keys[key] = false;
	}
}