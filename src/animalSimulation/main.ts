/**
 * Your goal is to build a basic simulation of animals and their behaviors.
 *
 * Tasks:
 * 
 * 1. Create an interface `AnimalInterface` that defines the structure of an animal:
 *    - Properties: species (string), countryOfOrigin (string), type (mammal | reptile | amphibian | bird | fish | insect)
 *    - Actions (methods): move(), eat(), communicate()
 *    - Passive traits: isPredator (boolean), canSwim (boolean), canFly (boolean)
 *
 * 2. Create a class `Animal` that implements the interface:
 *    - Add a constructor that sets all necessary properties.
 *    - Implement the methods with basic console.log statements describing the behavior.
 *    - Use `if` statements to determine the passive traits based on the type or species.
 *
 * 3. Create a method `describe()` that returns a formatted string summarizing the animal.
 *
 * 4. Write a function `animalToObject()` that takes an `Animal` instance and returns a plain object
 *    matching the `AnimalInterface`.
 *
 * 5. Create a new class `Bird` that extends `Animal`:
 *    - Set `type` to `"bird"` by default.
 *    - Override the `communicate()` method to reflect bird-specific communication.
 *
 * 6. Add a health property to animals (default 100).
 *    - Create a method `attack(target: Animal): void` that reduces the target's health by a fixed amount.
 *    - Log the result of the attack and the target’s new health.
 *
 * 7. Create an async method `migrate(destination: string): Promise<void>`:
 *    - Simulate time passing using setTimeout (see: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 *    - Use async/await or Promise syntax (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 *    - Log a message indicating the animal has migrated.
 *
 * Bonus tasks:
 * 1. Use generics to create a function `logAnimal<T extends AnimalInterface>(animal: T): void`
 *    - This should print out all the animal’s properties in a loop.
 *    - See generics: https://www.typescriptlang.org/docs/handbook/2/generics.html
 *
 * 2. Modify `AnimalInterface` to support optional properties for different types of animals
 *    (e.g., `wingSpan?: number` for birds, `finCount?: number` for fish).
 *
 * 3. Create multiple animal instances and simulate interactions:
 *    - A bird attacks a fish, then migrates to another country.
 *    - Print out each animal's state after actions.
 */



interface AnimalInterface {
    species: string;
    countryOfOrigin: string;
    type: string;

    canSwim: boolean;
    canFly: boolean;
    isPredator: boolean;

    move(): void;
    eat(): void;
    commnunicate(): void;
}

class Animal implements AnimalInterface {
    species: string;
    countryOfOrigin: string;
    type: string;

    // Should these be set as default? Or put in the constructor?
    canSwim: boolean;
    canFly: boolean;
    isPredator: boolean;

    constructor(species: string, countryOfOrigin: string, type: string) {
        this.species = species;
        this.countryOfOrigin = countryOfOrigin;
        this.type = type;

        if (type === "fish") {
            this.canSwim = true;
        } else {
            this.canSwim = false;
        }

        if (countryOfOrigin === 'England' || countryOfOrigin === "USA") {
            this.canFly = true;
        } else {
            this.canFly = false
        }

        if (species === 'mammal') {
            this.isPredator = true;
        } else {
            this.isPredator = false;
        }
    }

    // Think about what these methods are _actually_ doing, be accurate even if you're just mocking the functions
    move() {
        if (this.canSwim) {
            console.log('The animal swims through water')
        } else {
            console.log('The animal walks on land')
        }
    }

    eat() {
        if (this.isPredator) {
            console.log("The animal eats another animal")
        } else {
            console.log("The animal eats some grass")
        }
    }

    commnunicate() {
        console.log("The animal communicates")
    }

    // This is good, but we don't need to surround the return with ()
    describe(): string {
        return 'Animal is of species' + this.species + 'Animal is of type' + this.type + 'Animal is from country ' + this.countryOfOrigin;
    }

    // This is good, but why are we passing "type" when we're not using it?
    animalToObject(): AnimalInterface {
        return {
            species: this.species,
            countryOfOrigin: this.countryOfOrigin,
            type: this.type,
            move: this.move,
            commnunicate: this.commnunicate,
            eat: this.eat,
            canFly: this.canFly,
            isPredator: this.isPredator,
            canSwim: this.canSwim
        }
    }
}

class Bird extends Animal {
    // https://www.typescriptlang.org/docs/handbook/classes.html looking for super
}