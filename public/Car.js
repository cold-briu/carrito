// export default
class Car {
    constructor() {

        this.isOn = false;
        this.handbrake = true;
        this.gear = 0; // 0 neutra to 6th gear
        this.seatbelt = false;

        // -1 lft, 0 off, 1rght, 2 parking
        this.blinker = 0
        this.dir = 0;

        this.speed = 10;
        this.pos = {
            x: 200,
            y: 200
        }; //x,y position

        //float 0 to 1
        this.brake = 0;
        this.acceleration = 0;
        this.clutch = 0;

    }
    render() {
        square(this.pos.x, this.pos.y, 20)
    }

    turnOn() {
        console.log('Turning on...');

        (this.handbrake && this.seatbelt && this.clutch === 1 &&
            this.gear === 0 && this.dir === 0) ?
            this.isOn = true
            :
            console.log("Err: Set gear to neutral")

        console.log(this.isOn);
    }

    move() {

        switch (this.dir) {
            case 0:
                this.pos.y -= this.speed * this.acceleration
                break;
            case 1:
                this.pos.x += this.speed * this.acceleration
                break;
            case 2:
                this.pos.y += this.speed * this.acceleration
                break;
            case -1:
                this.pos.x -= this.speed * (this.acceleration / 2)
                break;
        }

        // console.log(this.pos);

    }

    switchHandbrake() {
        this.handbrake === true ?
            this.handbrake = false
            :
            this.handbrake = true

        return console.log("HandBrake is now set to " + this.handbrake);
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
        return console.log(`Clutch is now set to ${this.clutch}`);
    }
    setBrake(input) {
        this.brake = input
        return console.log(`Brake is now set to ${this.brake}`);
    }

    setAcceleration(input) {
        this.acceleration = input
        // return console.log(`Acceleration is now set to ${this.acceleration}`);
    }
    setBlinker(input) {
        this.blinker = input;
        // return console.log(`Blinker is now set to ${this.blinker}`);
    }

    setGear(input) {
        switch (input) {
            case 0:
                this.gear = 0
                console.log(`Gear is now set to neutral`);
                break;
            case 1:
                this.gear = 1
                console.log(`Gear is now set to ${this.gear}`);
                break;
            case 2:
                this.gear = 2
                console.log(`Gear is now set to ${this.gear}`);
                break;
            case 3:
                this.gear = 3
                console.log(`Gear is now set to ${this.gear}`);
                break;
            case 4:
                this.gear = 4
                console.log(`Gear is now set to ${this.gear}`);
                break;
            case 5:
                this.gear = 5
                console.log(`Gear is now set to ${this.gear}`);
                break;
            case 6:
                this.gear = 6
                console.log(`Gear is now set to ${this.gear}`);
                break;
            default:
                console.log('ERR: Please set input: 0,1,2,3,4,5,6')
                break;
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
            case "down":
                this.blinker == 2 ?
                    this.dir = 2
                    :
                    console.log(' ERR: Please set blinker to 0')

                // console.log(`Dir is now set to ${this.dir}`);
                break
            default:
                console.log('ERR: Please set input: "right","left","front"')

                break;
        }
    }

}
