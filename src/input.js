class KeyboardInput {
	constructor(game) {
		this.game = game;
		this.keys = {
			w: false,
			s: false,
			a: false,
			d: false,
		};
		this.listening = false;
	}
	listen() {
		window.addEventListener("keydown", (event) => {
			this.keydown(event);
		});
		window.addEventListener("keyup", (event) => {
			this.keyup(event);
		});
		this.listening = true;
	}
	keydown(event) {
		this.keys[event.key] = true;
	}
	keyup(event) {
		//this.keys[event.key] = false;
	}
	clearKey(key) {
		this.keys[key] = false;
	}
}