var rand;
var testCar;
var randWeight;
var weight;
var speed;
var wall;
function setup() {
  createCanvas(1600,400);
  testCar = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  
  weight = random(400,1500); 
  testCar.velocityX = random(55,90);
  speed = testCar.velocityX;
   
  if(testCar.isTouching(wall)){
    var deformation;
    deformation = (0.5*weight*speed*speed)/2250;
    if(deformation>180){
       testcar.shapeColor=colour(255,0,0);
    }
    if(deformation<100 && deformation>180){
      testcar.shapeColor=colour(255,0,0);
   }
    if(deformation<100){
      testcar.shapeColor=colour(0,255,0);
   }
  }
 
}

function draw() {
  background(255,255,255); 
  testCar.collide(wall);
  wall.shapeColor=color(80,80,80);
 
  
  drawSprites();
}