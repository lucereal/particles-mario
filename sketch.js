import SpriteSheet from './Spritesheet'
 import {loadImage} from './loaders'

let windowObj = {
    x: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    y: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
}
let context;
let canvas;
let raf;

let mario

class Mario {
    constructor(image,context, width, height){
        this.sprite = new SpriteSheet(image, height, width); //create new spritesheet with width and height size
        this.context = context;
        this.sprite.define('mario', 48, 0);
        this.x = Math.random() * canvas.height;
        this.y = Math.random() * canvas.width;
        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;
    }

    draw(posx,posy){
        
        this.sprite.drawTile('mario', this.context, posx, posy)
    }

    update(){
        
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > canvas.height ||
            this.y + this.vy < 0) {
            this.vy *= -1;
        }
        if (this.x + this.vx > canvas.width ||
            this.x + this.vx < 0) {
            this.vx *= -1;
        }
        this.draw(this.x, this.y);
    }

}
let marios = []
window.onload = function () {
    console.log("window")
    canvas = document.getElementById('tutorial');
    canvas.height = windowObj.y;
    canvas.width = windowObj.x;
    if (canvas.getContext) {
        context = canvas.getContext('2d');

        loadImage('./assets/supermarioworldspritesheet.png', function (image) {
            // const sprites = new SpriteSheet(image, 30, 20); //create new spritesheet with width and height size
            // sprites.define('mario', 48, 0); //define sprite with where it is in sheet
            //sprites.draw('mario', context, 0,0)// draw it at place specified
            
            mario = new Mario(image, context, 30, 20)
          
            for(let i = 0; i< 50; i++){
                marios.push(new Mario(image, context, 30,20))
            }
            draw();
        })

    }

}
let ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 5,
    radius: 25,
    color: 'blue',
    draw: function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
    }
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
 
    for(let i = 0; i<marios.length; i++){
        marios[i].update()
    }
  
    raf = window.requestAnimationFrame(draw);

}

