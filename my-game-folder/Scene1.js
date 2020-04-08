class Scene1 extends Phaser.Scene {

    constructor(){
        super("bootGame")
    }
    preload(){
        this.load.image("fond", "assets/fond.jpg");
        // this.load.image("alien1", "assets/alien1.png");
        // this.load.image("alien2", "assets/alien2.png");
        // this.load.image("alien3", "assets/alien3.png");

        this.load.spritesheet("ship", "assets/ship.png",{
            frameWidth:16, 
            frameHeight: 16
        });
        
       this.load.spritesheet("ship2", "assets/ship2.png",{
           frameWidth: 32, 
           frameHeight: 16
       });

       this.load.spritesheet("ship3", "assets/ship3.png", {
           frameWidth: 32, 
           frameHeight: 32
       });

        this.load.spritesheet("explosion", "assets/explosion.png",{
            frameWidth:16, 
            frameHeight: 16
        });
        
    }
    
    create() {
        this.add.text(50, 50, "Loading game...");
        this.scene.start("playGame");
    }
}