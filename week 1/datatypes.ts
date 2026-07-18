//Number datatype
let price: number =550;
let shippingcharge: number =90;
let totalcost : number = price + shippingcharge;
console.log(totalcost);
//string datatype
let studentname : string ="Anjali";
let collegename : string = "shri vishnu Engineering college for Women";
let Details : string = `${studentname} studying in ${collegename}` ;
console.log(Details);
// Boolean datatype
let personAge : number =25;
let votersAge : boolean = personAge > 18;
if(votersAge){
    console.log("you are eligible to vote");
} else{
    console.log("you are not eligible");
}
console.log(`${studentname} 's total cost is ${totalcost}`);