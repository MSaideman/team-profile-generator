const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const renderHtml = require('./templates/templates')
const fs = require('fs');
const { inherits } = require('util');
let employees = [];

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
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employees.push(manager);
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
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    employees.push(engineer);
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
            message: "What school does the Intern go to?",
            name: "school"
        }
    ]).then((response)=> {
        response.role = 'Intern';
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern);
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
    if (response.add === 'Yes') {
        employeeRole();
    } else { 
        renderEmployees();
    }
    
    
})
};

// build html 
renderEmployees = () => {
    const employeeTemplate = renderHtml(employees);
    fs.writeFile('./dist/index.html', employeeTemplate, (error) => {
        if (error) {
            console.log("error!")
        } else {
            console.log("success!");
        }
    })
}

init();