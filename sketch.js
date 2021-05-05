
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dong1,dong2,dong3,dong4,dong5;

var roof;

var rope1,rope2,rope3,rope4,rope5;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	dong1 = new Dong(800,400,40);
	dong2 = new Dong(750,400,40);
	dong3 = new Dong(700,400,40);
	dong4 = new Dong(850,400,40);
	dong5 = new Dong(900,400,40);

  roof = new Roof(800,250,230,20);

  rope1 = new Rope(dong1.body,roof.body,10,0);
  World.add(world,rope1);

  rope2 = new Rope(dong2.body,roof.body,-35,0);
  World.add(world,rope2);

  rope3 = new Rope(dong3.body,roof.body,-75,0);
  World.add(world,rope3);

  rope4= new Rope(dong4.body,roof.body,45,0);
  World.add(world,rope4);

  rope5 = new Rope(dong5.body,roof.body,85,0);
  World.add(world,rope5);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("red");
  
   dong1.display();
   dong2.display();
   dong3.display();
   dong4.display();
   dong5.display();

   roof.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW || dong3.isTouching(dong2)) {

    Matter.Body.applyForce(dong3.body,dong3.body.position,{x:-50,y:50});
  
  }
}