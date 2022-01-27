// Player class

class Player extends Entity {
	constructor(game) {
		super(game);
		this.imagesrc = "res/Frog.png";
        this.texture = new ImageTexture(game);
        this.texture.loadTexture(this.imagesrc);
		this.position = {
			x: 240,
			y: 280
		};
		this.speed = 20;
    }
    update(){
        this.render();
    }
    render(){
        this.texture.draw(this.position.x, this.position.y);        
    }
}