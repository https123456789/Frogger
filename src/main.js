window.onload = () => {
	var WIDTH = 500;
	var HEIGHT = 300;
	Crafty.init(WIDTH, HEIGHT);

	var player = Crafty.e("2D, Color, Canvas, Fourway");
	player.attr({
		x: 0,
		y: 0,
		w: 20,
		h: 20
	});
	player.color("rgb(0, 0, 255)");
	player.fourway(20);
}