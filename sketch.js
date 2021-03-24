var tower, towerImage;
var door, doorImage;
var climber, climberImage;



function preload(){
towerImage = loadImage("tower.png");
doorImage = loadImage("door.png");
climberImage = loadImage("climber.png")
}




function setup(){
    createCanvas(500,600);
tower = createSprite(250,300,500,600);
tower.addImage("towerPic", towerImage);
tower.velocityY = 6;


}



function draw(){

if(tower.y>500){
    tower.y = tower.y/2;
}



    drawSprites();
    doors();
}

function doors(){
 
    if(frameCount%70===0){
        door = createSprite(Math.round(random(50,450)),0,20,20);
        door.addImage("doorPic",doorImage);
        door.velocityY = 6;
        door.lifetime = 500;

        climber = createSprite(200,0,20,20);
        climber.addImage("climberPic", climberImage);
        climber.velocityY = 6;
        climber.lifetime = 500;

        climber.x = door.x;
        climber.y = door.y+55;

        
 


    }
}