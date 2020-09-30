var car,wall
var speed,weight
var deformation




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,20,20);
  car.velocityX = speed
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor(80,80,80);
  deformation=random(0,180);
}

function draw() {
  createCanvas(1600,400);
  background(255,255,255);  
  drawSprites();

  if (car.x-wall.x<car.width/2+wall.width/2 && 
    wall.x-car.x<car.width/2+wall.width/2 &&
    car.y-wall.y<car.height/2+wall.height/2 && 
    wall.y-car.y<car.height/2+wall.height/2){
    car.shapeColor="red";
    }
}