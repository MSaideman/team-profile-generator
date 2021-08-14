const Manager = require('./manager');
const Engineer = require('./engineer');
const Employee = require('./employee');
const Intern = require('./intern');
const inquirer = require('inquirer');
const fd = require('fs');
const { inherits } = require('util');

// add prompt to enter the team manager’s name, employee ID, email address, and office number when app opens
init = () => {
console.log();
return inquirer
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
    }
]).then((response)=> {
    response.role = 'Manager';
    employeeRole();
})
};

// add prompt to choose between engineer and intern employee types

employeeRole = () => {
    console.log();
return inquirer
.prompt([
    {
        type:"list",
        message:"What is the Employee's role?",
        name: "role",
        choices: [
            'Engineer',
            'Intern'
        ]
    }
]).then(response => {
    if (response.role ==='Engineer') {
        addEngineer();
    } else {
        addIntern();
    }
})
};

// add prompt to enter engineer's name, employee ID, email address, and github username
addEngineer = () => {
    inquirer
    .prompt([
        {
            type:"input",
            message:"What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's Github user name?",
            name: "github"
        }
    ]).then((response)=> {
    response.role = 'Engineer';
    addEmployee();
})
};
// add prompt to enter the intern’s name, ID, email, and school
addIntern = () => {
    console.log();
    return inquirer
    .prompt([
        {
            type:"input",
            message:"What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What schoold does the Intern go to?",
            name: "school"
        }
    ]).then((response)=> {
        response.role = 'Intern';
        addEmployee();
})
};
// go back to menu page to add more employees or finish adding
addEmployee = () => {
    console.log();
    return inquirer
    .prompt([
        {
            type:"list",
            message:"Do you want to add another Team Member?",
            name: "add",
            choices: [
                'Yes',
                'No'
            ]
        }
    ]).then(response => {
    if (response.add = 'Yes') {
        employeeRole();
    } else {

    }
    
    
})
};



init();