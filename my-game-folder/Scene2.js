class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    
    create (){
        // this.fond = this.add.image(0, 0,"fond");
        this.fond = this.add.tileSprite(0,0, config.width, config.height, "fond");

        this.fond.setOrigin(0,0);
        this.ship= this.add.sprite(config.width/2-100, config.height/2, "ship");
        this.ship.setDisplaySize(35, 35);
        this.ship2= this.add.sprite(config.width/2, config.height/2, "ship2");
        this.ship2.setDisplaySize(35, 35);
        this.ship3= this.add.sprite(config.width/2+100, config.height/2, "ship3");
        this.ship3.setDisplaySize(35, 35);
        this.anims.create({
            key:"ship1_anim", 
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20, 
            repeat:-1
           
        });
        this.anims.create({
            key:"ship2_anim", 
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20, 
            repeat:-1
           
        });
        this.anims.create({
            key:"ship3_anim", 
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20, 
            repeat:-1
           
        });
        this.anims.create({
            key:"explode_anim", 
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20, 
            repeat:0,
           hideOnComplete: true
        });

        this.ship.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.ship.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();
        
        this.input.on('gameobjectdown', this.destroyShip, this);

        this.add.text(50,50, "Playing Game",{font: "35px Arial", fill: "white"});
        
       
    }
    moveShip(ship, speed){
        ship.y += speed;
        if (ship.y > config.height){
            this.resetShipPos(ship);
        }
    }
    resetShipPos(ship){
        ship.y = 0;
        var randomX = Phaser.Math.Between (0, config.width)
        ship.x = randomX;
    }
    destroyShip(pointer, gameObject){
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }
    update(){
        this.moveShip(this.ship, 2);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 2);
        this.fond.tilePositionY -= 0.5;
    }
    
}