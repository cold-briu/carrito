class Trip extends Car {
    constructor(maxtime = 100, maxdist = 100) {
        super()
        this.currentTime = 0;
        this.maxTime = maxtime;
        this.dist = 0;
        this.maxDist = maxdist;

        this.driving = true;
        this.currentStop = {
            atDist: 0,
            duration: 0
        }

        this.stoppedTime = 0;
        this.stops = makeStopsArr(this.maxDist)

    }

    tryStop() {
        if (this.driving) {
            this.stops.map(stop => {
                if (this.dist >= stop.atDist) {
                    this.currentStop = this.stops.unshift()
                    this.driving = false
                    console.log("sstoppet", !this.driving);
                }
            })
        } else {

            this.stoppedTime++
            console.log(`Current stoptime: ${this.stoppedTime} of ${this.currentStop.duration} `);
            if (this.stoppedTime >= this.currentStop.duration) {
                this.driving = true
                this.stoppedTime = 0
                console.log("driving");
            }
        }



    }

    checkTime() {
        toyota.currentTime++
        if (this.currentTime == this.maxTime) {
            noLoop()
            console.log("Reached Maxtime")
            console.log("total dist", toyota.dist)
        }

    }
    checkDist() {
        this.dist += (this.speed * this.acceleration)

        if (this.dist == this.maxDist) {
            noLoop()
            console.log("Reached Maxdist")
            console.log("total time", toyota.currentTime)
        }
    }
}

const makeStopsArr = (maxDist) => {
    let output = [
        makeRandomStop(maxDist),
        makeRandomStop(maxDist),
        makeRandomStop(maxDist),
    ]
    output.sort((current, next) => {
        let a = current.atDist
        let b = next.atDist
        return a < b ? -1 : 1
    })
    return output
}

const makeRandomStop = (maxDist) => {
    return {
        atDist: getRandomInt(maxDist - 20),
        duration: getRandomInt(15)
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 5
}