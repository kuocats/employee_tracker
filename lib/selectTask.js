const inquirer = require('inquirer');
const prompts = require('./prompt.js');
const handleTask = require('./handleTask.js');

function selectTask() {
    inquirer
    .prompt(prompts)
    .then((response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)
    })
};

module.exports = selectTask;