var particles = [];

function setup(){
  createCanvas(1000, 700);
  background(255, 33, 103);
  stroke(255, 33, 103);
}

function mousePressed(){
  for(var i = 0; i < 50; i++) {
    var x = 0
    var y = random(height);
    var d = 10;
    particles[i] = new Particle(x, y, d);
  }

}

function draw() {
  for(var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

function Particle(tempX, tempY, tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = random(1,2);

  this.move = function() {
    let wiggles1 = [-5, 5];
    let wiggle = random(wiggles1);
    this.y += wiggle;

    this.x += this.speed

  };

  this.display = function() {
    fill(33, 181, 255);
    ellipse(this.x, this.y, this.diameter);
  };

}
