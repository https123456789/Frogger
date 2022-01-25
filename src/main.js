var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var game = new Game(ctx);

window.setInterval(() => {
	game.update();
}, 1000/60);