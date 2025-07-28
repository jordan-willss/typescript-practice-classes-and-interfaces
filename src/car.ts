// This interface defines the shape of something, and lets us know what to expect from a class or object
interface CarInterface {
    colour: string,
    type: string,
    canGoFaster: () => boolean;
    racing: () => void;
}

// We use "implements" to say that our class will use a specific interface
class Car implements CarInterface {
    colour: string;
    readonly type: string;
    maxSpeed: number = 100;

    constructor(colour: string, type: string) {
        this.colour = colour;
        this.type = type;
    }

    // Passive: Just checking
    canGoFaster(): boolean {
        if (this.maxSpeed > 100) {
            return true;
        } else {
            return false;
        }
    }

    // Active: Does something
    racing() {
        if (this.canGoFaster()) {
            // Move faster and start racing
        }
    }

    getCarObject(): CarInterface {
        return {
            colour: this.colour,
            type: this.type,
            canGoFaster: this.canGoFaster,
            racing: this.racing
        }
    }
}

const bmw = new Car("Blue", "bmw");

const bmwObject = bmw.getCarObject(); // We can now get an object version from our class, this is more "usable" when we think about APIs, but it can be more easily manipulated in negative ways

bmw.colour = "Red"; // Even though we change the value of colour in the CLASS, it does not update in our OBJECT

console.log(bmwObject.colour); // So this is still Blue