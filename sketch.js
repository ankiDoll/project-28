const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundImg;
var boy,tree,stone,chain1;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
	groundImg = loadImage("jungle.jpg");
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	
	boy = new Boy(350,500);
	tree = new Tree(1100,334);
	stone = new Stone(220,410);

	mango1 = new Mango(1106,129);
	mango2 = new Mango(950,250);
	mango3 = new Mango(1188,230);
	mango4 = new Mango(1078,305);
	mango5 = new Mango(1256,310);

	chain1 = new Chain(stone.body,{x: 300 ,y: 435});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  console.log(mango1.body.position);
  background(groundImg);
 
  drawSprites();

  boy.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  chain1.display();
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});

	stone.move();
}

function mouseReleased()
{
	chain1.fly();
}
