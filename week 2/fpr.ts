//function with parameter and return type
function discount(price:number): number {
return price-5;
}
// function calling and passing a value
let finalbill:number=discount(50);
console.log("Total Bill amount:",finalbill);