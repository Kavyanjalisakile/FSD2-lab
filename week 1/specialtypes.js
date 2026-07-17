"use strict";
// using Any(it disables type checking )
let message = "welcome to India";
message = 92;
message = true;
console.log(message);
// using unknown (it is alternative to any)
let moviename = "Demon slayer";
if (typeof moviename == "string") {
    let upperText = moviename.toUpperCase();
    console.log(upperText);
}
// using void (no return type)
function main(country) {
    console.log(`I live in ${country}`);
}
main("Bhimavaram");
