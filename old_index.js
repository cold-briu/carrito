class Carro {
    constructor() {

        this.x = 100;
        this.y = 100;
        this.speed = 10;
    }
    render() {
        // square(this.x, this.y, 20, 20);
    }
    mover() {
        if (this.x > 500 || this.x < 10) {
            this.speed *= -1;
        }
        this.x += this.speed;
    }
}
var miCarro = new Carro;





function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(200);
    noStroke();
    miCarro.render()
    miCarro.mover()


    // ex = ex + mov;
    // ellipse(ex, 300, 20);
    // if (ex > 500) {
    //     mov = mov * -1;
    // } else if (ex < 10) {
    //     mov = mov * -1;
    // }




}

