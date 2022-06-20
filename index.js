const inquirer = require("inquirer");
const Engineer = require("./lib/engineer")
const Manager = require('./lib/manager')
const fs = require('fs');
const Intern = require("./lib/intern");
questionsArray = [];

function runApp () {
    function createTeam () {
        inquirer.prompt([{
            type: 'list',
            message: "what type of employee would you like to add?",
            name: "addPrompt",
            choices: [Manager, Engineer, Intern, "No more members needed."]
        }]).then(function (userInput){
            switch(userInput.addPrompt) {
                case "Manger":
                    add.Manager();
                    break;
                case "Engineer":
                    add.Engineer();
                    break;
                case "Intern":
                    add.Intern();
                
                default:
                    teamBuilder();
            }
        })
    }
}

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"

        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Id number?"

        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the managers email?"

        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"

        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        questionsArray.push(manager);
        createTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineers's name?"

        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's Id number?"

        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"

        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github username?"

        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        questionsArray.push(engineer)
        createTeam();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"

        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's Id number?"

        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"

        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern go to?"

        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        questionsArray.push(intern);
        createTeam();
    });
}

function writeToFile(fileName, data) {
    let content = generateReadMe(data);
    fs.writeFile("./ouput/README.md", content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log("Success")
    })
    createTeam();
}


runApp();