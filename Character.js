import SpriteSheet from './Spritesheet'
import { canvas } from './sketch'
import {loadImage} from './loaders'
export default class Character {

    constructor(context) {
       
        this.leftup;
        this.rightup;
        this.rightdown;
        this.leftdown;
  
        this.image;
        this.context = context;
        this.width = 50;
        this.height = 50;
        this.vx = 0
        this.vy = 0
        this.x = 0
        this.y = 0;
        this.setPostition()

        this.currentSprite 
        // this.createSprites();
    }

    createSprites () {
        let self = this
        return new Promise((resolve,reject) => {
            loadImage('./assets/mario-left.gif', function(image){
                self.setLeftUp(image, 28,27,352, 548);
                self.setLeftDown(image, 32,26, 162, 451);
                loadImage('./assets/mario-right.gif', function(image){
                    self.setRightUp(image,28,27,210,548)
                    self.setRightDown(image, 32,26,366,451); 
                    resolve();
                })
            })
           
        })
        
        
    }

    setLeftUp(image, width, height, spriteX, spriteY){
        this.leftup = new SpriteSheet(image, height,width)
        this.leftup.define('marioleftup', spriteX,spriteY)
    }
    setRightUp(image, width, height, spriteX, spriteY){
        this.rightup = new SpriteSheet(image, height,width)
        this.rightup.define('mariorightup', spriteX,spriteY)
    }
    setLeftDown(image, width, height, spriteX, spriteY){
        this.leftdown = new SpriteSheet(image, height,width)
        this.leftdown.define('marioleftdown', spriteX,spriteY)
    }
    setRightDown(image, width, height, spriteX, spriteY){
        this.rightdown = new SpriteSheet(image, height,width)
        this.rightdown.define('mariorightdown', spriteX,spriteY)
    }

    setPostition() {
        this.x = Math.random() * ((canvas.width - this.width) - this.width) + this.width
        this.y = Math.random() * ((canvas.height - this.height) - this.height) + this.height
    }

    draw(posx, posy) {
        let name;
        if(this.vx >= 0 && this.vy < 0){
            this.currentSprite = this.rightup
            name = 'mariorightup'
        }else if(this.vx >= 0 && this.vy > 0){
            this.currentSprite = this.rightdown;
            name = "mariorightdown"
        }else if(this.vx < 0 && this.vy < 0){
            this.currentSprite = this.leftup
            name = 'marioleftup'
        }else{
            this.currentSprite = this.leftdown;
            name = 'marioleftdown'
        }

        this.currentSprite.drawTile(name, this.context, posx, posy)
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;

        this.checkBoundry();
        this.draw(this.x, this.y);
    }

    setVelocity(vxMax, vyMax) {
        //return Math.random() * (max - min) + min;
        let minx = -vxMax;
        let miny = -vyMax;
        this.vx = Math.random() * (vxMax - minx) + minx
        this.vy = Math.random() * (vyMax - miny) + miny

    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    checkBoundry() {
        if (this.y > (canvas.height - this.height) || this.y + this.vy < 0) {
            this.vy *= -1;
        }
        if (this.x > (canvas.width - this.width) ||this.x + this.vx < 0) {
            this.vx *= -1;
        }

        //if mario is off the screen because of a canvas resize then redraw him
        if (this.y  > (canvas.height + this.height) || this.y + this.vy - this.height < (0-this.height)) {
            this.setPostition()
        }
        if (this.x > (canvas.width + this.width) ||this.x + this.vx < (0-this.width)) {
            this.setPostition()
        }
    }

}

