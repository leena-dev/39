class Game {
    constructor() {}

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val();
            
        });
    }

    updateState(state) {
        database.ref("/").update ({
            gameState : state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                player.getCount();
            }
            form = new Form();
            form.display();

            //car1 = createSprite(100, 200);
            car1 = createSprite(100 + 220, 200); //1.
            car1.addImage("car1",car1_img); //2.
            //car2 = createSprite(300, 200);
            car2 = createSprite(300 + 220, 200); //3.
            car2.addImage("car2",car2_img); //4.
            //car3 = createSprite(500, 200);
            car3 = createSprite(500 + 220, 200); //4.
            car3.addImage("car3",car3_img); //5.
            //car4 = createSprite(700, 200);
            car4 = createSprite(700 + 220, 200); //6.
            car4.addImage("car4",car4_img); //7.
            cars = [car1, car2, car3, car4]
            
        }
    }

    play() {

        //textSize(40);
        //text ("game start", 100,100);
        form.hide(); //8.
        player.getPlayerDetails();
        
        if(allPlayersInfo!==undefined){
            background('white'); 
            image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5); //9.
            drawSprites();        
            for(var i=1;i<=playerCount;i++){
                var playerIndex="player"+i;
                y=displayHeight-allPlayersInfo[playerIndex].distance;
                cars[i-1].y=y;
                if(i===player.index){
                    cars[i-1].shapeColor="red";
                    //camera.position.x=cars[i-1].x;
                    camera.position.x = displayWidth/2; //10.
                    camera.position.y=cars[i-1].y;
                } else{ }
            }
        }    
        if(keyIsDown(UP_ARROW) && gameState != 2) { //11.
            player.distance = player.distance + 50;
            player.updatePlayerDetails();
        }
        if(player.distance > displayHeight*5){ //12.
            gameState = 2;
        }
    }
    end(){ //13.
        console.log("Game Ended");
    }
}