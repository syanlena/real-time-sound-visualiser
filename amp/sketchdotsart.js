// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/q2IDNkUws-A



var mic;
var bs=[]
var ballSize=50

	
function setup() {
  createCanvas(windowWidth, windowHeight,)
  background(0)
  fill(200)
 colorMode(HSB)
 
  for(a=0;a<5;a++)//bs.push( new Ball())
  bs[a] = new Ball(random(width), random(height));
	
  mic = new p5.AudioIn();
  mic.start()
  noStroke(); 
	
}

function draw() {
  var vol = mic.getLevel(0.9)
  
  //bs.push(new Ball())
  ballSize = map(vol,0,50,0,width
			)
  //(vol,x,y(the volume = thesize),x,y)
  
  for(a=0;a<bs.length;a++){
  	bs[a].update()
  	bs[a].display()
  }
	//if (this.bs.length>6){
		//this.bs.splice(0,1);
	//}
	
	
}

 
function Ball(){
	
  this.x = random(innerWidth)
  this.y = random(innerHeight)
  
  this.dx=random(width)
  this.dy=this.dx
  this.fill=random(0,360)
    
  this.update=function() {
    this.x= this.x + random(-5, 5);
    this.y=this.y + random(-5,5);
	//this.r=random(2,60)
    //if(this.x>width || this.x<0)this.dx=-this.dx
    //if(this.y>height || this.y<0)this.dy=-this.dy
	
  }
  
  
  this.display=function(){
  	fill(this.fill,100,100
	)
    ellipse(this.x,this.y, ballSize, ballSize)
	//if (this.bs.length>55){
		//this.bs.splice(0,1);
	//}
  }
}