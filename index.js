const Inquirer = require("inquirer");
const Engineer = require("./lib/engineer")
const Manager = require('./lib/manager')
const fs = require('fs');
const inquirer = require("inquirer");
teamArray = [];

function generateTeam () {
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
                    add.Intern
                
                default:
                    teamBuilder();
            }
        })
    }
}

