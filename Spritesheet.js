export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }
    define(name, x, y) {
        const buffer = document.createElement('canvas');
        buffer.width = this.width * 1.5;
        buffer.height = this.height * 1.5;
        //drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
        //sx - x-axis coordinate of top left corner of the sub rectangle
        //sy - y-axis coordinate of top left corner of the sub rectangle
        //swidth - width of the sub rectangle 
        //sheight - height of the sub rectangle
        //dx,dy - the coordinates of the top left corner of sub rectangle to place on the screen
        //dwidth, dheight - the size of the sub 
        
      
        let context = buffer.getContext('2d');
        context.drawImage(this.image,
            x, y,
            this.width, this.height,
            0, 0,
            this.width * 1.5 , this.height* 1.5 );
           
        this.tiles.set(name, buffer);

    }
    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }
    drawTile(name, context, x,y){
        this.draw(name, context, x, y)
    }
}