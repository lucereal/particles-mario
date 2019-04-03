
import Character from './Character'

let windowObj = {
    // x: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    // y: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    // x: window.innerWidth,
    // y:window.innerHeight,
    x: document.body.clientWidth,
    y: document.body.clientHeight,
}
let context;
export let canvas;
let raf;
let marios = []
let mario2
let marioCape;
window.onresize = function () {
    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
}

window.onload = function () {
    console.log("window")
    canvas = document.getElementById('canvas');
    canvas.height = windowObj.y;
    canvas.width = windowObj.x;
    if (canvas.getContext) {
        context = canvas.getContext('2d');

        let promises = [];
        for (let i = 0; i < 25; i++) {
            let m = new Character(context);
            m.setVelocity(3,3);
            marios.push(m);
            promises.push(m.createSprites())
        }
        Promise.all(promises).then(function (values) {
            draw();
        });

    }

}

function draw() {
    context.fillStyle = '#F8E1B2'
    context.fillRect(0, 0, canvas.width, canvas.height);
    //context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < marios.length; i++) {
        marios[i].update()
    }

    raf = window.requestAnimationFrame(draw);

}

