// variable,  Array annotations 
let student = "Anjali";
let roomnumber = 103;
let messfoodpaid = true;
let expenses = [750, 550];
//function parameters and return type annotations
function hostelfee(rent, messfee) {
    return rent + messfee;
}
let totalfee = hostelfee(expenses[0], expenses[1]);
console.log(`Student Name :${student}`);
console.log(`RoomNumber:${roomnumber}`);
console.log(`Mess is provided:${messfoodpaid}`);
console.log("Total Hostel fee: $" + totalfee);
export {};
