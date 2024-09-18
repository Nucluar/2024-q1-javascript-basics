//@ts-check

class Cheese {
    constructor(type) {
        this.type = type;
        this.color = "yellow";
        this.age = 0;
        this.cost = 0.0;
    }

    eat() {
        console.log(`Nom nom nom ${this.type} is yummy and sentiant!`)
    }
}

let cheddar = new Cheese("heddar");
let swiss = new Cheese("swiss");
swiss.color = "white";

let gouda = new Cheese("gouda");

gouda.eat();
cheddar.eat();
swiss.eat();