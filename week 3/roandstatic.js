"use strict";
class Game {
    // readonly: Can be read, but NEVER changed
    gameName = "Chess";
    // static: Belongs to the class itself (shared counter)
    static score = 100;
}
// 1. Testing STATIC: Call it directly using the Class name
console.log("Static Score:", Game.score); // Output: 100
// 2. Testing READONLY: Create an object to read it
let myGame = new Game();
console.log("Readonly Name:", myGame.gameName); // Output: Chess
