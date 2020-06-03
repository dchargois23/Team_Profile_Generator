// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() { return this.officeNumber; }

    getRole() {
        return "Manager";
    }

}

// const manager = new Manager(15, "Jay", "jay@yahoo.com", 20006604);

// console.log("---Manager---");

// console.log(manager.getName());
// console.log(manager.getId());
// console.log(manager.getEmail());
// console.log(manager.getOfficeNumber());
// console.log(manager.getRole());


