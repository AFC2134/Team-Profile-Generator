const fs = require('fs');
const inquirer = require('inquirer');

function questions() {
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'employeeClass',
        message: 'What type of employee are you?',
        choices: ['manager','engineer', 'intern']
        },
        {
        type: 'input',
        name: 'employeeName',
        message: 'What is your Name?',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your Employee ID?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is your employee Email'
        }
    ])
};
questions()