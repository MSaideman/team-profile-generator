const Manager = require('./manager');
const Engineer = require('./engineer');
const Employee = require('./employee');
const Intern = require('./intern');
const inquirer = require('inquirer');
const fd = require('fs');
const { inherits } = require('util');

// add prompt to enter the team manager’s name, employee ID, email address, and office number when app opens
init = () => {
inquirer
.prompt ([
    {
        type: "input",
        message: "Who is the team's Manager?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Manager's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber"
    },
]).then(() => {

})
};

// add prompt to choose between engineer and intern employee types

// add prompt to enter engineer's name, employee ID, email address, and github username

// add prompt to enter the intern’s name, ID, email, and school

// go back to menu page to add more employees or finish adding

init();