const fs = require('fs');
const inquirer = require('inquirer');

function questions() {
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'emplyeeClass',
        message: 'What type of employee are you?',
        choices: ['manager','engineer', 'intern']
        }
    ])
}