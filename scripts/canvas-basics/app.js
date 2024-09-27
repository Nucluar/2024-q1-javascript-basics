//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

class SpuareShape {

    constructor(x, y) {
        this.x =y;
        this.y =x;

        this.width = 50;
        this.height = this.width;
        this.hue = 0;
        
        this.speedMult = 11;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedY = Math.floor(Math.random() * this.speedMult) + 1;
        this.dirX = 1;
        this.dirY = 1;
    }

    update() {
        this.x += this.speedX * this.dirX;
        this.y += this.speedY * this.dirY;
        this.hue++;

        if(this.hue > 360) {
            this.hue = 0;
        }

        if(this.x < 0) {
            // offscreen left side
            this.dirX = 1;
        } else if(this.x + this.width > canvas.width) {
            //offscreen rifht move left
            this.dirX
        }

        if(this.y < 0) {
            // offscreen top side
            this.dirY = 1;
        } else if(this.y + this.width > canvas.width) {
            //offscreen top move down
            this.dirY
        }
    }

    draw() {
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, 100%)`;
        ctx.fillRect(175, 225, 50, 50);
       // ctx.fillRect(175, 275, 50, 50);
        
        //ctx.beginPath();
        //ctx.arc(200, 200, 25, 0, Math.PI * 2);
        //ctx.fill()
    
        //ctx.fillRect(100, 225, 75, 20)
        
        //ctx.fillRect(225, 225, 75, 20)
        
       // ctx.fillRect(162, 310, 75, 20)
        
        //ctx.fillRect(162, 310, 20, 150)
        
        //ctx.fillRect(220, 310, 20, 150)
    }
}

let s1 = new SpuareShape(0, 0)

let shapes = [];

for (let i = 0; i < 100; i++) {
   shapes.push(new SpuareShape(0, 0));
}

ctx.fillStyle = "hsla(0, 100%, 50%, 100%)";
//"red";

ctx.fillRect(175, 225, 50, 50);

s1.draw();
s1.update();

for (const shape of shapes) {
    shape.update();
    shape.draw();
}

ctx.fillStyle = `hsla(${hue}, 100%, 50%, 50%)`;
ctx.fillRect(175, 225, 50, 50);
ctx.fillRect(175, 275, 50, 50);

ctx.beginPath();
ctx.arc(200, 200, 25, 0, Math.PI * 2);
ctx.fill()

ctx.fillRect(100, 225, 75, 20)

ctx.fillRect(225, 225, 75, 20)

ctx.fillRect(162, 310, 75, 20)

ctx.fillRect(162, 310, 20, 150)

ctx.fillRect(220, 310, 20, 150)
hue = hue + 1;

ctx.fillStyle
//hue = hue + 0.5vb ch;
//console.log(elapsedTime);

//window.requestAnimationFrame(drawLoop);
//}



//window.requestAnimationFrame(drawLoop);

class Stick {
    constructor(x, y) {
        this.x =y;
        this.y =x;

        this.width = 50;
        this.height = this.width;
        this.hue = 0;
        
        this.speedMult = 11;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedY = Math.floor(Math.random() * this.speedMult) + 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.hue++;
    }

    draw() {
        //ctx.fillStyle = `hsla(${hue}, 100%, 50%, 100%)`;
        ctx.fillRect(175, 225, 50, 50);
        ctx.fillRect(175, 275, 50, 50);
        
        ctx.beginPath();
        ctx.arc(200, 200, 25, 0, Math.PI * 2);
        ctx.fill()
        
        ctx.fillRect(100, 225, 75, 20)
        
        ctx.fillRect(225, 225, 75, 20)
        
        ctx.fillRect(162, 310, 75, 20)
        
        ctx.fillRect(162, 310, 20, 150)
        
        ctx.fillRect(220, 310, 20, 150)
    }
}
