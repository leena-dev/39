var playerCount, database, gameState=0, allPlayersInfo;

var game, player, form;
var y=0; 

var cars, car1, car2, car3, car4; 
var track, car1_img, car2_img, car3_img, car4_img; //1.

//2.
function preload(){
  trackImg = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20, displayHeight-20); 

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if (playerCount === 4) {
    game.updateState(1);
    clear();
    game.play();
  }

  //3.
  if(gameState === 2){
    game.end();
  }
}