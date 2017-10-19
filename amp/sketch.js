var mic;
var bs = [];
//var ballSize=22
var canvas;

function setup() {

	canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	background(0);
stroke(0);
	colorMode(HSB)

	for (a = 0; a < 5; a++) 
		bs[a] = new Ball();
	mic = new p5.AudioIn();
	mic.start()
	//noStroke();

}

function draw() {
	var vol = mic.getLevel(0.1)
	ballSize = map(vol, 0, 1, 0, 500)
	//bs.push( new Ball())
		
	
	for (a = 0; a < bs.length; a++) {
		bs[a].update()
		bs[a].display()
}
}


function Ball() {

	this.x = random(innerWidth)
	this.y = random(innerHeight)

	this.dx = this.x//random(width)
	this.dy = this.dx
	this.fill = random(0, 360)


	this.update = function () {
		this.x = this.x + random(-10,10 );//this.dx //horizontal//this.x + random(-1, 1);//
		this.y = this.y + random(-10, 10);
		this.x= constrain(this.x,0,innerWidth);
		this.y=constrain(this.y,0,innerHeight);
		if(this.x>width || this.x<0)this.dx=-this.dx
		if(this.y>height || this.y<0)this.dy=-this.dy

	}


	this.display = function () {
		fill(this.fill, 100, 100)
		ellipse(this.x, this.y, ballSize, ballSize)


	}
}

function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
	background(0);
}
