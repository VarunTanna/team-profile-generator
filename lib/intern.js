const Employee = require("./employee")

const internQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's Id?"
    },
    {
        tpye: 'input',
        name: 'email',
        message: "What is the intern's email?"
    }, 
    {
        tpye: 'input',
        name: 'school',
        message: "What is the intern's school?"
    },
]

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = { Intern, internQuestionsArr };