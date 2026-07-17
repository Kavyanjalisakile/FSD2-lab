 export {}
// arrow function with parameter and return type
const discount =(price:number): number =>{
return price-5;
};
// function calling and passing a value
let finalbill:number=discount(50);
console.log("Total Bill amount:",finalbill);