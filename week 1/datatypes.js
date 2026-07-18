"use strict";
//Number datatype
let price = 550;
let shippingcharge = 90;
let totalcost = price + shippingcharge;
console.log(totalcost);
//string datatype
let studentname = "Anjali";
let collegename = "shri vishnu Engineering college for Women";
let Details = `${studentname} studying in ${collegename}`;
console.log(Details);
// Boolean datatype
let personAge = 25;
let votersAge = personAge > 18;
if (votersAge) {
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible");
}
console.log(`${studentname} 's total cost is ${totalcost}`);
