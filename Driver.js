class Driver extends Car {
    constructor(x, y) {
        super(x, y)
        this.driving = false;
        this.accTime = 0
        this.slowingDownTrigger = false
        this.prepareStop = false
    }

    move() {
        if (this.driving) {

            this.checkGear()
            this.autoAcceleration()
            this.speed = (this.gear * this.acceleration) * this.maxofmax // re-calcula speed
            this.dist += this.speed * this.currentTime // aumenta la distancia 

            switch (this.dir) {
                case 0:
                    this.pos.y -= this.speed * this.acceleration
                    break;
                case 1:
                    this.pos.x += this.speed * this.acceleration / 20
                    break;
                case 2:
                    this.pos.y += this.speed * this.acceleration
                    break;
                case -1:
                    this.pos.x -= this.speed * (this.acceleration / 20)
                    break;
            }
        }
    }

    turnOn() {
        this.switchSeatbelt();
        this.setClutch(1);
        this.ignitiON();
        this.setClutch(0);
        console.log("\ncar is now turnedOn \n·\n ·\n  ·");

    }

    stopCar() {
        if (this.driving) {
            this.speed = 0
            this.setAcceleration(0)
            this.setClutch(1)
            this.gearDown()
            this.switchHandbrake()

            this.driving = false
            this.setBlinker(2)
            console.log(`Stopped but isON ${this.isOn}`);
        } else {
            console.log("err: alredy stopped");
        }
    }

    startUp() {
        if (this.isOn) {

            this.setClutch(1);
            this.setBrake(1);
            this.switchHandbrake()
            this.gearUp();
            this.setBrake(0);
            this.setAcceleration(0.1);
            this.setClutch(0);
            this.driving = true
            this.prepareStop = false
            this.slowingDownTrigger = false
            console.log("\ncar has been started\n");

        } else {
            console.log("err: startCar");
        }
    }
    autoAcceleration() {

        if (this.acceleration == 0) {
            this.accTime = 0
        } else if (this.acceleration > 1) {
            this.setAcceleration(1)
        }
        this.accTime++
        this.acceleration += (this.accTime * .00006)

    }
    checkGear() {
        if (this.prepareStop || this.checkGearMaxSpeed()) {

            if (this.prepareStop) {

                if (this.gear > 0) {

                    this.setAcceleration(0)
                    this.setClutch(1)
                    this.gearDown()

                    this.setAcceleration(0);
                    this.setClutch(0)
                    return
                } else if (this.gear == 0) {
                    this.slowingDownTrigger = false
                }
                return
            } else {

                if (this.gear === 6) { //if true, baja vel
                    this.slowingDownTrigger = true

                    this.setAcceleration(0)
                    this.setClutch(1)
                    this.gearDown()
                    this.setAcceleration(0.1);
                    this.setClutch(0)

                } else if (this.gear === 0 && this.slowingDownTrigger && !this.prepareStop) {
                    this.slowingDownTrigger = false
                    this.setAcceleration(0)
                    this.setClutch(1)
                    this.gearUp()
                    this.setAcceleration(0.1);
                    this.setClutch(0)
                } else {
                    console.log("elelse");

                    this.setAcceleration(0)
                    this.setClutch(1)
                    this.gearUp()
                    this.setAcceleration(0.1);
                    this.setClutch(0)
                }
            }
        }
    }

    checkGearMaxSpeed() {
        return (this.speed >= (this.gear * 1) * this.maxofmax)
    }
}





// old for move

// switch (this.dir) {
//     case 0:
//         this.pos.y -= this.speed * this.acceleration
//         break;
//     case 1:
//         this.pos.x += this.speed * this.acceleration / 2
//         break;
//     case 2:
//         this.pos.y += this.speed * this.acceleration
//         break;
//     case -1:
//         this.pos.x -= this.speed * (this.acceleration / 2)
//         break;
// }