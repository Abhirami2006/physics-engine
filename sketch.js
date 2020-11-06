const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world,ball,ball1,ground

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  var option={
    isStatic:true
  }
  var options={
    restitution:1
  }
  ball= Bodies.rectangle(200,200,50,50,option)
  this.width=50
  this.height=50
  World.add(world,ball)
ball1= Bodies.circle(100,100,50,options)
World.add(world,ball1)
ground= Bodies.rectangle(200,390,400,20,option)
World.add(world,ground)
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,this.width,this.height)
  ellipseMode(CENTER);
  ellipse(ball1.position.x,ball1.position.y,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
}