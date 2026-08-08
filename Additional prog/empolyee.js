"use strict";
class Employee {
    name = "Kavya";
    salary = 50000;
    department = "IT";
    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let e = new Employee();
e.display();
console.log(e.name);
