const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
generateMarkdown = require('./src/index');
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
                            fs.writeFile("index.html", HTML, function (err) {
                                if (err) {
                                    console.log(err);
                                }
                            })
                        }

                    })
            }

            // else if if users answers engineer , then ask questions that pretain to engineer, intern ect. push new data to new array , else generatenardown. repeate adding to Array.. make new classes for enginner and intern , use super, specific to them info same as manager constructor... console log to trial error template literal, 
            else if(empData.employeeClass === "engineer") {
                inquirer
                .prompt([
                    {
                        type: "input",
                        name: "gitHub",
                        message: "Please enter your github User Name."
                    },
                    {
                        type: "list",
                        name: "updateEmp",
                        message: "Would you like to add another employee or Complete Team?",
                        choices: ["Add Employee", "Complete Team"]
                    }
                ])
                .then((engineerAnswer) => {
                    let engineerAction = new Engineer(empData.employeeName, empData.employeeId, empData.employeeEmail, engineerAction.gitHub);
                    allEmployees.push(engineerAction)
                    if (engineerAnswer.updateEmp === "Add Employee") {
                        questions();
                    } else { 
                        let HTML = generateMarkdown(allEmployees)
                    fs.writeFile("index.html", HTML, function(err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                    
                }
            
            }
        })



}

questions()