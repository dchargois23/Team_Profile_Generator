// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getGithub() { return this.github; }

    getRole() {
        return "Engineer";
    }

}

// const engineer = new Engineer(20, "Luke", "luke@yahoo.com");

// console.log("---Engineer---");

// console.log(engineer.getName());
// console.log(engineer.getRole());
// console.log(engineer.getEmail());
// console.log(engineer.getId());
// console.log(engineer.getGithub());


// getName() { return this.name; }
// getEmail() { return this.email; }
// getId() { return this.id; }
// getRole() { return "Employee"; }