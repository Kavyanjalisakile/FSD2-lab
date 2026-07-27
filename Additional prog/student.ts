class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s = new Student("Kavya", 20);
s.display();