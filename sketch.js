
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ball1,ball2,ball3,ball4,ball5;
var point1,point2,point3,point4,point5;
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,300,500,30)
	ball3 = new Ball(580,600)
	ball2 = new Ball(540,600)
	ball1 = new Ball(500,600)
	ball4 = new Ball(620,600)
	ball5 = new Ball(660,600)
	rope1 = new Rope(ball1.body,ground.body,-40*2,0)
	rope2 = new Rope(ball2.body,ground.body,-40*1,0)
	rope3 = new Rope(ball3.body,ground.body,0,0)
	rope4 = new Rope(ball4.body,ground.body,40*1,0)
	rope5 = new Rope(ball5.body,ground.body,40*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('gray');

  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-50,y:50})
	}
}

