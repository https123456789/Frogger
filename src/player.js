// Player class

class Player extends Entity {
	constructor(game) {
		super(game);
		this.imagesrc = "res/Frog.png";
        this.texture = new ImageTexture(game);
        this.texture.loadTexture(this.imagesrc);

        this.rect = new Rect(0, 0, 10, 10);
        console.log(this.game.tileRows[0]);
        // this.rect.setCenter();

    }
    update(){
        this.render();
    }
    render(){
        this.texture.draw(this.rect);        
    }
}