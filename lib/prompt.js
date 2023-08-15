const retrieveDepartments = require ('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retriveEmployee = require('./retrieve Employee');

const prompts = [

    {
        name: 'task',
        type: 'list',
        message: 'SELECT TASK:',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'EXIT']   
    },

    {
        name: "department",
        type: "input",
        message: "ENTER A NEW DEPARTMENT NAME:",
        when: (response) => {
            if (response.task === 'Add A Department') {
                return true;
            }
            return false;
        },
         validate: (response) => {
             if (response === "") {
                return console.log ('\u001b[31m', '\n Try again');
             }
             return true;
         }
    },

]