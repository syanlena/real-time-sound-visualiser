// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/q2IDNkUws-A



var mic;
var bs=[]
var ballSize=20

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
  fill(200)
  colorMode(HSB)
  for(a=0;a<10;a++)bs.push( new Ball())
  
  mic = new p5.AudioIn();
  mic.start()
}

function draw() {
  var vol = mic.getLevel()
  ballSize = map(vol,0,0.1,0,120
			)
  //(vol,x,y(the volume = thesize),x,y)
  
  for(a=0;a<bs.length;a++){
  	bs[a].move()
  	bs[a].show()
  }
	if (bs.length>2){
		bs.splice(0,1);
	}
}

function Ball(){
  this.x = random(width)
  this.y = random(height)
  this.r = random(6, 60
				);
  this.dx=random(1,4)*2
  this.dy=this.dx
  this.fill=random(360)
    
  this.move=function() {
    this.x+=this.dx
    this.y+=this.dy
    if(this.x>width || this.x<0)this.dx=-this.dx
    if(this.y>height || this.y<0)this.dy=-this.dy
  }
  
  this.show=function(){
  	fill(this.fill,100,100)
    ellipse(this.x,this.y, ballSize, ballSize)
  }
}