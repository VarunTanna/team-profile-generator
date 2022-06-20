const Employee = require("./employee")

const managerQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's Id?"
    },
    {
        tpye: 'input',
        name: 'email',
        message: "What is the manager's email?"
    }, 
    {
        tpye: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    },
]

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = { Manager, managerQuestionsArr };