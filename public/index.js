// import Car from './Car.js';
// console.log("\nSoftware is running...\n");


// const setap = () => {
//     console.log("· Setup is running...\n");

//     console.log(toyota);
//     toyota.turnOn();

//     //encender
//     toyota.switchSeatbelt();
//     toyota.setClutch(1);
//     toyota.turnOn();
//     toyota.setClutch(0);

//     console.log("\narrancando\n");


//     //arrancar
//     toyota.setClutch(1);
//     toyota.setBrake(1);
//     toyota.switchHandbrake();
//     toyota.setGear(1);
//     toyota.setBrake(0);
//     toyota.setAcceleration(1);
//     toyota.setClutch(0);

//     //voltear y direccionales
//     toyota.setBlinker(1);
//     toyota.turnDir("right");
//     toyota.setBlinker(-1);
//     toyota.turnDir("left");
//     toyota.setBlinker(0);
//     toyota.turnDir("front");

//     //mover
//     console.log("movin");

//     toyota.move()
//     toyota.setBlinker(-1);
//     toyota.turnDir("left");
//     toyota.move()
//     toyota.setBlinker(0);
//     toyota.turnDir("front");
//     toyota.move()
//     toyota.setAcceleration(.5);
//     toyota.move()
//     toyota.setAcceleration(1);
//     toyota.move()




// }

const toyota = new Trip(1000);
toyota.stops.map(entry => console.log(entry))


function setup() {
    createCanvas(400, 400);
    frameRate(5)
}

function draw() {
    console.log(toyota.dist);

    background(200)


    toyota.move()
    toyota.render()

    toyota.checkTime()
    toyota.checkDist()
    toyota.tryStop()

    toyota.setAcceleration(0)
    noLoop()
}



function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            toyota.setAcceleration(1)
            toyota.setBlinker(-1);
            toyota.turnDir("left");
            break;

        case RIGHT_ARROW:
            toyota.setAcceleration(1)
            toyota.setBlinker(1);
            toyota.turnDir("right");
            break;
        case UP_ARROW:
            toyota.setAcceleration(1)
            toyota.setBlinker(0);
            toyota.turnDir("front");
            break;
        case DOWN_ARROW:
            toyota.setAcceleration(1)
            toyota.setBlinker(2);
            toyota.turnDir("down");
            break;
        default:
            break;
    }
}
