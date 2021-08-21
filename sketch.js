var gameState = 0;
var playerCount;
var allPlayers;
var moveplayer = 0;
var database;

var form, player, game;

var player1,player2,player3,player4,playerImg,bg,M1Img,M2Img,position,r,gif_loadImg,gif_createImg,playerImg2_;
var cars;
function preload(){
    playerImg=loadImage("PUp.gif")
    bg=loadImage("BG.jpg")
    playerImg1=loadImage("PDown.gif")
   // gif_loadImg=createImg("PUp.gif")
   // gif_createImg=createImg("PDown.gif");
    playerImg2=loadImage("PLeft.gif")
    //playerImg2_=createImg("Pleft.gif");
    playerImg3=loadImage("PRight.gif");
    //playerImg3_=createImg("PRight.gif");
    //M1Img=createImg("M1.gif");
    M1Img_=loadImage("M1.gif")
   // M2Img=createImg("M2.gif"); 
    M2Img_=loadImage("M2.gif"); 

}
function setup(){
    createCanvas(windowWidth, windowHeight)

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
  background("red")
  if(playerCount === 4){
    game.update(1);
  }
    if(gameState === 1){
     clear()
      game.play();
    }


}
function spawnObstacles(){
  if(frameCount % 150 ===0){
     Obstacles=createSprite(windowWidth-20,Math.round(random(0,1200)),20,20); 
     var rand = Math.round(random(1,2));
     Obstacles.velocityX=-10;
     Obstacles.velocityY=+10; 
     switch(rand) {
        case 1: Obstacles.addImage("ob Img",M1Img_) 
        Obstacles.scale=0.3;
        break;
       case 2: Obstacles.addImage("ob Img",M2Img_)  
       Obstacles.scale=0.3;
       break; 
       default: break; }
  }

  }

