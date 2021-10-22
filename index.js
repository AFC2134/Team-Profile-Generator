const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
generateMarkdown = require('./src/index')
let allEmployees = [];

function questions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeClass',
                message: 'What type of employee are you?',
                choices: ['manager', 'engineer', 'intern']
            },
            {
                type: 'input',
                name: 'employeeName',
                message: "What is the employee's Name?",
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'What is the Employee ID?',
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'What is the employee Email'
            }
        ])
        .then(empData => {
            if (empData.employeeClass === "manager") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "officeNum",
                            message: "What is your office number?"
                        },
                        {
                            type: "list",
                            name: "updateEmp",
                            message: "Would you like to add another employee or Complete Team?",
                            choices: ["Add Employee", "Complete Team"]
                        }

                    ])

                    .then(managerAnswers => {
                        let managerAction = new Manager(empData.employeeName, empData.employeeId, empData.employeeEmail, managerAnswers.officeNum)
                        allEmployees.push(managerAction)
                        if (managerAnswers.updateEmp === "Add Employee") {
                            questions();
                        } else {
                            let HTML = generateMarkdown(allEmployees)
                            fs.writeFile("index", HTML , err)
                        }

                    })
            }
        // else if if users answers engineer , then ask questions that pretain to engineer, intern ect. push new data to new array , else generatenardown. repeate adding to Array.. make new classes for enginner and intern , use super, specific to them info same as manager constructor... console log to trial error template literal, 
        })



}

questions()