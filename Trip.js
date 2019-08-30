class Trip extends Driver {
    constructor(maxtime = 100, maxDist = 100, x, y) {
        super(x, y)
        this.currentTime = 0;
        this.dist = 0;
        this.maxTime = maxtime;
        this.maxDist = maxDist;

        this.stops = this.makeStopsArr(this.maxDist)
        console.log(this.stops);

        this.currentStop = { atDist: 0, duration: 0 }
        this.nextStop = this.stops[0]
        this.stoppedTime = 0;
    }

    render() {
        noStroke()
        !this.driving ?
            // fill(255, 0, 0)
            text(`stop ${this.stoppedTime} of ${this.currentStop.duration}`, 40, 40)
            :
            fill(255)
        // image(img, this.pos.x - 10, 78, 30, 24)
        rectMode(CENTER)
        rect(this.pos.x, 80, 30, 10)
    }


    time() {
        this.currentTime++
        if (this.currentTime >= this.maxTime) {
            noLoop()
            text(`Reached max time at ${this.dist / 1000} kms aprox`, 40, 60)

            console.log("Reached Maxtime")
            console.log("total dist", this.dist)
        }
    }

    checkMaxDist() {
        if (this.driving) {
            this.move()
            if (this.dist >= this.maxDist) {
                noLoop()
                console.log("Reached Maxdist")
                console.log("total time", this.currentTime, "total dist", this.dist)
                text(`finished at ${(this.dist * .001).toFixed(0)} in ${this.currentTime * 60} hs`, 40, 60)
            }
        }
    }

    tryStop() {
        if (this.driving) { //if driving, try stop

            if (this.nextStop && this.checkStop()) {

                this.stopCar()
                this.nextStop = this.stops[1]
                this.currentStop = this.stops[0]
                this.stops.splice(0, 1)
                console.log("after splice", this.stops);

                console.log(`stoped at ${this.currentStop.atDist} dist for ${this.currentStop.duration} times`);
            }

        } else { // !this.driving
            if (this.dist > 0) {
                if (this.checkStopStillWaiting()) {
                    this.stoppedTime++
                    console.log(`Current stoptime: ${this.stoppedTime} of ${this.currentStop.duration} `);
                } else {
                    this.stoppedTime = 0
                    console.log("Stop is done, staring again...");
                    this.setBlinker(0)
                    this.startUp()
                }
            }
        }
    }
    checkStop() {

        if (this.nextStop && this.dist >= this.nextStop.atDist) {
            return true
        } else if (this.nextStop.atDist - this.dist < this.nextStop.atDist * .3 && this.stoppedTime < 0) {
            this.prepareStop = true
            this.slowingDownTrigger = true
            console.log("> prepaing stop");
            return false
        }


    }
    checkStopStillWaiting() {
        return (this.stoppedTime < this.currentStop.duration) ? true : false
    }

    indicators() {
        textSize(5)
        text(`km/h ${((this.speed / 1000) * 60 * 60).toFixed(1)}`, 5, 10)
        text(`m/s ${this.speed.toFixed(2)} `, 5, 20)
        text(`gear ${this.gear} `, 5, 30)
        text(`dir ${this.dir} `, 5, 40)
        text(`blinker ${this.blinker} `, 5, 50)

        text(`time: ${(this.currentTime / 60).toFixed(2)} hs `, 70, 10)
        text(`dist: ${(this.dist / 1000).toFixed(2)} KM`, 70, 20)
        text(`max: ${(this.maxDist / 1000).toFixed(2)} KM`, 70, 30)
        text(`avgSpeed: ${((this.dist / this.currentTime) / 17).toFixed(2)} KM/h`, 70, 40)

        this.nextStop ?
            text(`nextStop at ${((this.nextStop.atDist - this.dist) / 1000).toFixed(2)}`, 70, 50)
            :
            text(`nextStop at ${((this.maxDist - this.dist) / 1000).toFixed(2)}`, 70, 50)


        text(`encendido ${this.isOn} `, 5, 70)
        text(`driving ${this.driving} `, 5, 80)
    }

    makeStopsArr(maxDist) {
        const makeRandomStop = (maxDist) => {
            return ({
                atDist: getRandomInt(maxDist),
                duration: getRandomInt(120)
            });
        }
        const getRandomInt = max => Math.floor(Math.random() * max) + 1;

        let preArray = new Array(getRandomInt(3)).fill("")
        let stopsOutput = preArray.map(() => makeRandomStop(this.maxDist / 2))

        return stopsOutput.sort((current, next) => {
            let a = current.atDist
            let b = next.atDist
            return a > b ? 1 : -1
        })
    }
}




