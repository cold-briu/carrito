// MAIN CONFIG

const config = {
    screen: {
        w: 300,
        h: 100
    },
    MAX_HORAS: 30,
    MAX_METROS: 10000000,
    SEGS_SIZE: 10,
    // imgUrl: "https://cfc7329ad537523a5de1-b21544d490ba797ec9de9d17e947de3d.ssl.cf1.rackcdn.com/roush-mustang-rear-valance-aero-foil-kit-2018-gt-422085_c7418ac6.jpg"
}
let { screen, MAX_HORAS, MAX_METROS, SEGS_SIZE, imgUrl } = config
let img;



const ZASTAVA = new Trip(MAX_HORAS * 60, MAX_METROS, screen.w * .5, screen.h * .5);


function preload() {
    // img = loadImage(imgUrl);
}

function setup() {
    const canvas = createCanvas(screen.w, screen.h);
    frameRate(SEGS_SIZE)

    ZASTAVA.turnOn()
    ZASTAVA.startUp()
}

// MAIN LOOP
// let lineas = []

// let separacion = 10
// for (let y = 0; y < ; y += separacion) {
//     lineas.push(y)
// }

function Road(maxDist, h, w, actDist) {

    for (let y = 0; y < h; y++) {

        y += 5
        stroke(0)
        line(0, y, w, y)
    }

}



function draw() {
    console.log('\n· · ·   ++    · · · \n');
    background(100) // limpia la pantalla
    Road(ZASTAVA.maxDist, screen.h, screen.w, ZASTAVA.dist)

    ZASTAVA.time() // revisa si tiempo acabó y aumenta
    ZASTAVA.tryStop()
    ZASTAVA.checkMaxDist() // revisa si distancia se alcanzó y avanza

    ZASTAVA.render() // muestra en pantalla
    ZASTAVA.indicators()// muestra indicadores en pantalla

    // noLoop()
}












function keyTyped() {
    if (ZASTAVA.driving) {

        switch (key) {
            case "i":
                ZASTAVA.setBlinker(-1)
                break;

            case "p":
                ZASTAVA.setBlinker(1)
                break;

            case "0":
                ZASTAVA.setBlinker(0)
                break;

            case "a":
                ZASTAVA.turnDir("left");
                break;

            case "d":
                ZASTAVA.turnDir("right");
                break;

            case "w":
                ZASTAVA.turnDir("front");
                break;

            case "s":
                ZASTAVA.setBlinker(2);
                ZASTAVA.turnDir("back");
                break;

            default:
                ZASTAVA.setAcceleration(0)

                break;
        }
    }
}



// grid(ZASTAVA.dist * 100, screen.w * .59 - (ZASTAVA.pos.x * .2))
//Road(ZASTAVA.maxDist, screen.h, screen.w, ZASTAVA.dist)
// strokeWeight(.5);
// line(0, screen.h * .4, screen.w, screen.h * .4)





// import Car from './Car.js';
// console.log("\nSoftware is running...\n");


// const setap = () => {
//     console.log("· Setup is running...\n");

//     let ZASTAVA = new Car()

//     console.log(ZASTAVA);
//     ZASTAVA.ignitiON();

//     //encender
//     ZASTAVA.switchSeatbelt();
//     ZASTAVA.setClutch( 1 );
//     ZASTAVA.ignitiON();
//     ZASTAVA.setClutch(0);

//     console.log("\narrancando\n");


//     //arrancar
//     ZASTAVA.setClutch(1);
//     ZASTAVA.setBrake(1);
//     ZASTAVA.switchHandbrake();
//     ZASTAVA.setGear(1);
//     ZASTAVA.setBrake(0);
//     ZASTAVA.setAcceleration(1);
//     ZASTAVA.setClutch(0);

//     //voltear y direccionales
//     ZASTAVA.setBlinker(1);
//     ZASTAVA.turnDir("right");
//     ZASTAVA.setBlinker(-1);
//     ZASTAVA.turnDir("left");
//     ZASTAVA.setBlinker(0);
//     ZASTAVA.turnDir("front");

//     //mover
//     console.log("movin");

//     ZASTAVA.move()
//     ZASTAVA.setBlinker(-1);
//     ZASTAVA.turnDir("left");
//     ZASTAVA.move()
//     ZASTAVA.setBlinker(0);
//     ZASTAVA.turnDir("front");
//     ZASTAVA.move()
//     ZASTAVA.setAcceleration(.5);
//     ZASTAVA.move()
//     ZASTAVA.setAcceleration(1);
//     ZASTAVA.move()




// }







// }


// const grid = (y, x) => {

//     let j;
//     (y % 2 === 0) ?
//         j = false : j = true;

//     for (let i = 0; i < screen.h; i++) {
//         if (i % 2 == j) {

//             i = Math.floor(i * 1.15)

//             stroke(150);
//             strokeWeight(.1 * i / 3);

//             line(x - i, i + j + 40, x + i, i + j + 40);
//         }
//     }


// }