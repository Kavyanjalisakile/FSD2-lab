// using Any(it disables type checking )
let message : any = "welcome to India";
message = 92;
message = true;
console.log(message);
// using unknown (it is alternative to any)
let moviename : unknown = "Demons slayer";
if (typeof moviename == "string"){
    let upperText : string =moviename.toUpperCase();
    console.log(upperText);
}
// using void (no return type)
function main(country : string):void{
    console.log(`I live in ${country}`);
}
main("Bhimavaram");
