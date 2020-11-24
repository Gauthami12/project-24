
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(800,675,200,20);
	box2 = new Box(700,625,20,100);
	box3 = new Box(900,625,20,100);
	ground = new Ground(500,685,1000,10);

	paper = new Paper(50,670, 10);
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);

  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
  keyPressed();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 1,y: -1});
	}
	if(paper.body.position.x > 350){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 0.1,y: 1.1});
	}
}



