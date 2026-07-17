class car{
    brand: string;
    // the constructor assigns the car name 
    constructor(carName:string){
        this.brand=carName;
    }
}
//creating a car object
let mycar = new car("BMW");
console.log("My Car is :",mycar.brand);