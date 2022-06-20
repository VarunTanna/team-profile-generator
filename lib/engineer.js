const Employee = require("./employee")

const engineerQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    }, 
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineers email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    }
]


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
    
}

module.exports = { Engineer, engineerQuestionsArr };