// export default
class Car {
    constructor(x, y) {

        this.isOn = false;
        this.handbrake = true;
        this.gear = 0; // 0 neutra to 6th gear
        this.seatbelt = false;

        // -1 lft, 0 off, 1rght, 2 parking
        this.blinker = 0
        this.dir = 0;

        this.speed = 0;
        this.pos = {
            x: x,
            y: y
        }; //x,y position

        //float 0 to 1
        this.brake = 0;
        this.acceleration = 0;
        this.clutch = 0;

        this.maxofmax = 7;

    }


    ignitiON() {
        (this.handbrake && this.seatbelt && this.clutch === 1 &&
            this.gear === 0 && this.dir === 0) ?
            this.isOn = true
            :
            console.log("Err: Set gear to neutral")

        console.log(`this cars isOn ${this.isOn}`);
    }



    switchHandbrake() {
        this.handbrake === true ?
            this.handbrake = false
            :
            this.handbrake = true

        console.log("HandBrake is now set to " + this.handbrake);
    }

    switchSeatbelt() {
        this.seatbelt === true ?
            this.seatbelt = false
            :
            this.seatbelt = true
        return console.log("Seatbelt is now set to " + this.seatbelt);
    }


    setClutch(input) {
        this.clutch = input
        console.log(`Clutch is now set to ${this.clutch}`);
    }
    setBrake(input) {
        this.brake = input
        console.log(`Brake is now set to ${this.brake}`);
    }

    setAcceleration(input) {
        this.acceleration = input
        return console.log(`Acceleration is now set to ${this.acceleration}`);
    }
    setBlinker(input) {
        this.blinker = input;
        // return console.log(`Blinker is now set to ${this.blinker}`);
    }

    gearUp() {
        if (this.gear === 6) {
            this.setAcceleration(1)
            console.log("err: you are on max gear");
        } else if (this.clutch == 1 && this.acceleration === 0) {
            this.gear++
            console.log(`Gear is now set to ${this.gear}`);
        } else {
            console.log("Set clutch to 1 and acceleration to 0, then change gear");
        }

    }

    gearDown() {
        if (this.gear === 0) {
            console.log("err: you are on neutral gear");
        } else if (this.clutch === 1 && this.acceleration === 0) {
            this.gear--
            console.log(`Gear is now set to ${this.gear}`);
        } else {
            console.log("Set clutch to 1 and acceleration to 0, then change gear");
        }
    }



    turnDir(input) {
        switch (input) {
            case "left":
                this.blinker == -1 ?
                    this.dir = -1
                    :
                    console.log(' ERR: Please set blinker to -1')

                // console.log(`Dir is now set to ${this.dir}`);
                break;

            case "right":
                this.blinker == 1 ?
                    this.dir = 1
                    :
                    console.log(' ERR: Please set blinker to 1')

                // console.log(`Dir is now set to ${this.dir}`);
                break
            case "front":
                this.blinker == 0 ?
                    this.dir = 0
                    :
                    console.log(' ERR: Please set blinker to 0')

                // console.log(`Dir is now set to ${this.dir}`);
                break
            case "back":
                this.blinker == 2 ?
                    this.dir = 2
                    :
                    console.log(' ERR: Please set blinker to 2')

                // console.log(`Dir is now set to ${this.dir}`);
                break
            default:
                console.log('ERR: Please set input: "right","left","front or down"')

                break;
        }
    }

}
