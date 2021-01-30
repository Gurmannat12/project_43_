var hr;
var mn;
var sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(300,300);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("lightgreen");
  strokeWeight(7);
  line(0,0,85,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,55,0);
  pop();

  strokeWeight(10);
  noFill();
  
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}