/**
 * Tasks:
 * 1. Create a class for an Animal, where we give it a "species", "country of origin", and "type" (mammal, amphibian, reptile, etc.)
 * 2. Give it some active Actions, such as "move", "eat", "communicate"
 * 3. Give it some passive Actions, such as "is it a predator", "is it able to swim", "can it fly" — use IF statements to work this out from things like the type or species
 * 4. Create an interface for the Animal called AnimalInterface that shows what properties and actions the class should have
 * 5. Create a function to convert the class into an object with the same interface
 *
 * Bonus task (might require some Googling):
 * 1. Create another class that extends from Animal, for example, Fish might be a class that extends from Animal and sets the default for "type" to "amphibian"
 * 2. In the interface, make some of the options conditional, so that we could either include or exclude certain things when returning the object
 * 3. Interact between the classes, for example: Create an "attack" function, and then passing an instance of another animal as the parameter means that we can change values in that other instance, such as its "health"
 */

interface AnimalInterface{
    species: string;
    country_of_origin: string;
    type: string;
    isAnimalPredator2(): boolean;
    isAnimalAbleToSwim(): boolean;
    isAnimalAbleToFly(): boolean;
    move(): void;
    eat(): void;
    communicate(): void;
}
 
class Animal{
    species: string;
    country_of_origin: string;
    type: string;
    isPredator: boolean = true;
 
    constructor(species: string, coumtry_of_origin: string, type: string){
        this.species=species;
        this.country_of_origin=coumtry_of_origin;
        this.type=type;
    }
 
    // passive check
 
    isAnimalPredator(): boolean{
        if (this.isPredator)
            return true
        else return false
    }
 
    isAnimalAbleToSwim(){
 
    }
    isAnimalAbleToFly(){
 
    }
 
    move(){}
    eat(){
 
        if (this.isAnimalPredator()){
 
             console.log("Animal is predator")
 
        } else
            console.log("test test")
 
    }
    communicate(){}
}
 
const a = new Animal('peacock','ireland','bird');
 
console.log(a)
 
const eat = a.eat();
console.log(eat)
 

 
let newobject: AnimalInterface;