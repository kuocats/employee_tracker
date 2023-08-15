const { viewDepartments, viewRoles, viewEmployees } = require ('./queryView.js');
const { addDepartment, addRole, addEmployee } = require ('./queryAdd.js');
const updateEmployeeRole = require ('./queryUpdate.js');
const { displayExitText } = require ('./specialText.js');

function handleTask (response) {
    switch (response.task) {
        case "View All Departments":
            viewDepartments();
            break;
        case "View All Roles":
            viewRoles();
            break;
        case "Add A Department":
            addDepartment(response);
            break;
        case "Add A Role":
            addRole (response);
            break;
        case "Add An Employee":
            addEmployee(response);
            break;
        case "Update An Employee Role":
            updateEmployeeRole(response);
            break;
        case "EXIT":
            displayExitText();
            process.exit(0);
    }
};

module.exports = handleTask; 