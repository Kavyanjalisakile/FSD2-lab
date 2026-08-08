"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let b1 = new Box(100000);
let b2 = new Box("Spider Man no way Home");
b1.display();
b2.display();
