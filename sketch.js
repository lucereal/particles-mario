import SpriteSheet from './Spritesheet'
 import {loadImage} from './loaders'

let windowObj = {
    x: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    y: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
}
let context;
let canvas;
let raf;



window.onload = function () {
    console.log("window")
    canvas = document.getElementById('tutorial');
    canvas.height = windowObj.y;
    canvas.width = windowObj.x;
    if (canvas.getContext) {
        context = canvas.getContext('2d');

        loadImage('./assets/supermarioworldspritesheet.png', function (image) {
            const sprites = new SpriteSheet(image, 30, 20); //create new spritesheet with width and height size
            sprites.define('mario', 48, 0); //define sprite with where it is in sheet
            sprites.draw('mario', context, 0,0)// draw it at place specified
            
            for(let i = 0; i< 25; i++){
                //sprites.draw('mario', context, i * 30, i * 20)
                sprites.drawTile('mario', context, i, i)
            }
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
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.vy > canvas.height ||
        ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width ||
        ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
    }
    raf = window.requestAnimationFrame(draw);

}

