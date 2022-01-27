class Vec {
	constructor(x, y){
        this.x = x;
        this.y = y;
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }
}

class Vec3 extends Vec {
	constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(vec) {
        Vec.prototype.add(vec);
		if (vec instanceof Vec3) {
            this.z += vec.z;
        }
        
    }
}

class Clock {
	constructor(game, fps){
        this.game = game;
		this.fps = fps; // FPS should be in frames per second (integer)
        this.delta = 1/this.fps
        this.deltaConst = 60*this.delta // This gives a value that we can multiply to speed dependent variables that normally run in 60 fps enviroments
		this.ticks = 0;
        this.lastUpdate = 0;
        this.speed = 1; // This is the speed factor for slow-mo and speed changing effects 
        
        window.setInterval(() => {
			this.update();
		}, 1);
        
	}
	update() {
		this.ticks += 1;
        if (this.ticks - this.lastUpdate > this.delta*1000*this.speed){
            this.game.update();
            this.lastUpdate = this.ticks
        }
	}
}

class ClockHTTP {
	constructor(game, fps) {
		this.game = game;
		this.fps = fps;
		// Tracks ticks
		this.ticks = 0;
		// Game can change this to change its update rate
		this.urate = 1000;
		window.setInterval(() => {
			this.update();
		}, 1);
	}
	update() {
		// Example
		// 		Slow mo
		// this.ticks = 12;
		// if (...) = true
		// game updates
		// this.ticks = 13;
		// if (...) = flase;
		// game doesn't update
		if ((this.ticks % this.urate) == 0) {
			this.game.update();
			this.ticks = 1;
			// To conserve memory
			// ex:
			// urate = 2
			// 0, 1, 2 (triggered), 1, 2 (triggered)
			// ... , 2 (triggered), 1, 2 (triggered)
			// vs
			// 0, 1, 2 (triggered), 3, 4 (triggered)
			// ... , 678 (triggered), 679, 680 (triggered)
		}
		this.ticks += 1;
	}
}

class ClockLAG {
	// for you oooh  :)
    constructor(game, fps){
        this.game = game;
		this.fps = fps; // FPS should be in frames per second (integer)
        this.delta = 1/this.fps
        this.deltaConst = 60*this.delta // This gives a value that we can multiply to speed dependent variables that normally run in 60 fps enviroments
		this.ticks = 0;
        this.lastUpdate = 0;
        this.speed = 1; // This is the speed factor for slow-mo and speed changing effects 
        
        window.setInterval(this.update, 1);
        
	}
	update() {
		this.ticks += 1;
		// Oh, I see what you did
        if (this.ticks - this.lastUpdate > this.delta*1000*this.speed){
            this.game.update();
        }
	}
    
}

// The most useful Class in existence

// We dont need this right now
class Rect {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    get center(){
        return new Vec(this.x + this.w/2, this.y + this.h/2);
    }
    get topLeft(){
        return new Vec(this.x, this.y)
    }
    get right(){
        return this.x + this.w;
    }
    get left(){
        return this.x;
    }
    get top(){
        return this.y;
    }
    get bottom(){
        return this.y + this.h;
    }
    get size(){
        return new Vec(this.w, this.y);
    }
    setCenter(x, y){
        this.x = x - this.w/2;
        this.y = y - this.h/2;
    }
    setRight(x, y){
        this.x = x - this.w;
    }
    collide(other){
        if (this.top < other.bottom && this.bottom > other.top){ //Checks Vertical alignment
            if (this.right > other.left && this.left < other.right){
                return true;
            }
        }
        return false
    }
}
