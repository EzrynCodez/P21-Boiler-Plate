
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let groundObj;
let ball;
let leftWall;
let rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	

	groundObj = new Ground(400, 690, 20, 800);
	rightWall = new Ground(700, 660, 120, 20);
	leftWall = new Ground(500, 660, 120, 20);
	ball = new Ball(200, 500, 40);

	let ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,

	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  rightWall.display();
  leftWall.display();
  ball.display();
  
  drawSprites();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0.05, y: 0.09});
	}
}


