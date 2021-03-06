
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 690, 800, 10);
	paperBall = new Paper(100, 655, 140);

	dustbin1 = new Dustbin(640, 635, 10, 100);
	dustbin1.shapeColor = color(255, 255, 255);
	dustbin2 = new Dustbin(740, 635, 10, 100);
	dustbin2.shapeColor = color(255, 255, 255);
	dustbin3 = new Dustbin(690, 680, 110, 10);
	dustbin3.shapeColor = color(255, 255, 255);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255,);
  
  drawSprites();

  ground.display();
  paperBall.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  
 
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:25,y:210});
  }


}



