var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Defaults
window.settings = {
	keybindings: {
		keyup: "w",
		keydown: "s",
		keyleft: "a",
		keyright: "d"
	}
};

var game = new Game(ctx);

/*
window.setInterval(() => {
    game.clock.tick();
}, 1000 / 60);
*/