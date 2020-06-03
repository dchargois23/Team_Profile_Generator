// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool() { return this.school; }

    getRole() {
        return "Intern";
    }

}

// const intern = new Intern(16, "Larry", "larry@yahoo.com", "UofH");

// // console.log("---Intern---");

// console.log(intern.getId());
// console.log(intern.getName());
// console.log(intern.getSchool());
// console.log(intern.getRole());

