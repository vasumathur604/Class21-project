var fixedRect;
var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX= 5

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX= -5

gameObject1=createSprite(100,80,50,50);
gameObject1.shapeColor="green";


gameObject2=createSprite(200,80,50,50);
gameObject2.shapeColor="green";


gameObject3=createSprite(300,80,50,50);
gameObject3.shapeColor="green";


gameObject4=createSprite(400,80,50,50);
gameObject4.shapeColor="green";
}


function draw() {
  background(255,255,255);
//  movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
  
  console.log(movingRect.x-fixedRect.x)

if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor="red";
 gameObject1.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
 gameObject1.shapeColor="green";

}
bounceOff(movingRect,fixedRect)

  drawSprites();
}
