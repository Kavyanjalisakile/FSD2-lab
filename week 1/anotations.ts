export {}
// variable,  Array annotations 
let student : string ="Anjali"
let roomnumber: number = 103;
let messfoodpaid : boolean = true;
let expenses: number[]=[750,550];
//function parameters and return type annotations
function hostelfee(rent:number,messfee:number):
number{
    return rent+messfee;
}
let totalfee :number=hostelfee(expenses[0],expenses[1]);
console.log(`Student Name :${student}`);
console.log(`RoomNumber:${roomnumber}`);
console.log("Total Hostel fee: $"+totalfee);