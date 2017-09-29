// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/q2IDNkUws-A



var mic;
var bs=[];
//var ballSize=50

	
function setup() {
	//fft = new p5.FFT();
  canvas = createCanvas(window.innerWidth, window.innerHeight)
  background(0)
  
 colorMode(HSB)
 
  for(a=0;a<6;a++)//bs.push( new Ball())
  bs[a] = new Ball();//random(width), random(height));
	
  mic = new p5.AudioIn();
  mic.start()
  noStroke(); 
	
}

function draw() {
  var vol = mic.getLevel(0.1)
  //var spectrum = fft.analyze();
  //for(a=0;a<5;a++)//bs.push( new Ball())
  //bs[a] = new Ball();
 //bs.push(new Ball());
  ballSize = map(vol, 0, 20,0, 200
			)
 
  
  for(a=0;a<bs.length;a++){
  	bs[a].update()
  	bs[a].display()
	
	  }
 
	
}

 
function Ball(){
	
  this.x = random(window.innerWidth)//random(window.innerWidth)
  this.y = random(window.innerHeight)
  
  this.dx=this.x//random(window.innerWidth)
  this.dy=this.y
  this.fill=random(0,360)
 

  this.update=function() {
    this.x= this.x + random(-5, 5);
    this.y= this.y + random(-5,5);
	  this.dx= constrain(this.dx,0,window.innerWidth);
	  this.dy=constrain(this.dy,0,window.innerHeight);

	 //this.x= constrain(this.x,0,innerWidth);
	 // this.y=constrain(this.y,0,innerHeight);
	//this.r=random(2,60)
    //if(this.x>width || this.x<0)this.dx=-this.dx
    //if(this.y>height || this.y<0)this.dy=-this.dy
	
  }
  
  
  this.display=function(){
  	fill(this.fill,100,100)
    ellipse(this.x,this.y, ballSize, ballSize)
	
	
  }
}