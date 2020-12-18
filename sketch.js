const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var dustbinObj,paperObject,groundObject

function preload()
{

}

function setup() {
	createCanvas(1600,700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;

dustbinObj=new dustbin (1200,650);

paperObject = new paper (200,450,40);

groundSprite=createSprite(width/2, height-35, width,20);
groundSprite.shapeColor="red"



ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 World.add(world, ground);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  Engine.update(engine);
 

dustbinObj.display();
paperObject.display();
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:190,y:-220});
	}
	}   
