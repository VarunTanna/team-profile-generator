const inquirer = require("inquirer");
const template = require('./utlis/template.js')

const { Manager, managerQuestionsArr } = require('./lib/manager');
const { Engineer, engineerQuestionsArr } = require('./lib/engineer');
const { Intern, internQuestionsArr } = require('./lib/intern');
const template = require("./utlis/template");

const teamArray = []

const init = () => { managerQuestions() }

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(( answers) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.OfficeNumber)
        teamArray.push(answers);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(( answers) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(answers);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(( answers) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(answers);
        return employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "What kind of team member would you like to add?",
        choices: [
            {name: "Engineer", value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'Done', value: "done"}
        ]
    }])
    .then( answers => {
        if (answers.employeeType === 'addEngineer') {engineerQuestions(); }; 
        if (answers.employeeType === 'addIntern') {internQuestions(); };
        if (answers.employeeType === 'Done') {
            let html = template(teamArray)
            console.log("Finished!")
            writeToFile(html);
        }
    })
}


init();



