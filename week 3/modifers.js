"use strict";
class User {
    username = "kavya123"; // Anyone can see this
    password = "pass123"; // Locked inside this class
    pinCode = 4455; // Only for this class and children
    // This function lets a user enter a password safely
    checkPassword(input) {
        if (input === this.password) {
            console.log("Login Success!");
        }
        else {
            console.log("Wrong Password!");
        }
    }
}
// --- TESTING THE CODE ---
let account = new User();
// 1. Public: Accessible directly
console.log(account.username);
// 2. Entering Password: User passes their guess into the function
account.checkPassword("wrong_pass"); // Output: Wrong Password!
account.checkPassword("pass123"); // Output: Login Success!
