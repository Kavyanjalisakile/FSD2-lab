class Box<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display() {
        console.log(this.value);
    }

}

let b1 = new Box<number>(100000);
let b2 = new Box<string>("Spider Man no way Home");

b1.display();
b2.display();