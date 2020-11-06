
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var box1;
var box2;

var world,engine,grd,ball;

function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world

  box1=new Box(800,365,60,60);
  box2=new Box(950,365,60,60);
  pig1=new Pig(875,370);
  log1=new Log(875,325,220,PI/2);
  box3=new Box(800,280,60,60);
  box4=new Box(950,280,60,60);
  pig2=new Pig(875,285);
  log2=new Log(875,240,220,PI/2);
  box5=new Box(875,195,60,60);
  log3=new Log(830,200,130,PI/5);
  log4=new Log(920,200,130,-PI/5);
  birdy=new Birdy(200,100);
  
  grd=new Ground(600,390,1200,15);
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();
  grd.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  birdy.display();
}