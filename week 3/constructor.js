"use strict";
class car {
    brand;
    // the constructor assigns the car name 
    constructor(carName) {
        this.brand = carName;
    }
}
//creating a car object
let mycar = new car("BMW");
console.log("My Car is :", mycar.brand);
