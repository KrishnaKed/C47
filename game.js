class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1=createSprite(400,550,30,30);
    player1.addImage("PlayerIMG",playerImg);
    player1.scale=0.75;
    player2=createSprite(500,550,30,30);
    player2.addImage("PlayerIMG",playerImg);player2.scale=0.75;
    player3=createSprite(600,550,30,30);
    player3.addImage("PlayerIMG",playerImg);player3.scale=0.75;
    player4=createSprite(700,550,30,30);
    player4.addImage("PlayerIMG",playerImg);player4.scale=0.75;
    cars=[player1,player2,player3,player4]
  }

play(){
  form.hide();

  // spawnObstacles();

  Player.getPlayerInfo();

if(allPlayers !== undefined){
  var index = 0;


  var x = 175 ;
  var y;

  for(var plr in allPlayers){

    index = index + 1 ;

    
    x = x + 200;

    y = displayHeight - allPlayers[plr].distance;
    cars[index-1].x = x;
    cars[index-1].y = y;

    if (index === player.index){
      cars[index - 1].shapeColor = "red";
      camera.position.x = displayWidth/2;
      camera.position.y = cars[index-1].y;
    }
   
  }

}

if(keyIsDown(UP_ARROW) && player.index !== null){
  player.moveplayer+=10
  player.update();
}

    drawSprites();
    
  }
  }
