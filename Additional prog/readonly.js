export class Student {
    id;
    constructor(id) {
        this.id = id;
    }
    display() {
        console.log("Student ID:", this.id);
    }
}
let s = new Student(101);
s.display();
