import SpriteSheet from './Spritesheet'
import { canvas } from './sketch'
export default class Character {

    constructor(image, context, width, height) {

        this.width = width;
        this.height = height;
        this.sprite = new SpriteSheet(image, height, width); //create new spritesheet with width and height size
        this.context = context;
        this.sprite.define('mario', 48, 0);
        this.vx = 0
        this.vy = 0
        this.x = 0
        this.y = 0;
        this.setPostition()

    }

    setPostition() {
        this.x = Math.random() * ((canvas.width - this.width) - this.width) + this.width
        this.y = Math.random() * ((canvas.height - this.height) - this.height) + this.height
    }
    draw(posx, posy) {
        this.sprite.drawTile('mario', this.context, posx, posy)
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
    update() {
        this.x += this.vx;
        this.y += this.vy;

        this.checkBoundry();
        this.draw(this.x, this.y);
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