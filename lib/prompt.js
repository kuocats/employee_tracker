const retrieveDepartments = require ('./retrieveDepartment');
const retrieveRole = require('./retrieveRole');
const retriveEmployee = require('./retrieveEmployee');

const prompt = [

    {
        name: 'task',
        type: 'list',
        message: 'SELECT TASK:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT']   
    },

    {
        name: "department",
        type: "input",
        message: "ENTER NEW DEPARTMENT NAME:",
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            }
            return false;
        },
         validate: (response) => {
             if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
             }
             return true;
         }
    },

    {
        name: "roleTitle",
        type: "input",
        message: "ENTER NEW ROLE TITLE:",
        when: (response) => {
            if (response.task === 'Add a role'){
                return true;
            }
            return false;
        },
        validate: (response) => {
            if ( response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },

    {
        name: "roleSalary",
        type: "input",
        message: "ENTER ROLE SALARY:",
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },

        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    }, 

    {
        name: "roleDepartment",
        type: "list",
        message: "SELECT ROLE DEPARTMENT:",

        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        }
    }, 

    {
        name: "employeeFirstName",
        type: "input",
        message: "ENTER FIRST NAME:",
        when: (response) => {
            if (response .task === 'Add an employee') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === ""){
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
    {
        name: "employeeLastName",
        type: "input",
        message: "ENTER LAST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        }, 
        
        valide: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
    {
        name: "employeeRole",
        type: "list",
        message: "SELECT EMPLOYEE ROLE:",
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        },
    },
    {
        name: "employeeRole",
        type: "list",
        message: "SELECT EMPLOYEE MANAGER:",
        choices: retriveEmployee, 
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        },
    },
    {
        name: "updateEmployee",
        type: "list",
        message: "SELECT EMPLOYEE:",
        choices: retriveEmployee,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            }
            return false;
        },
    },
];

module.exports = prompt;