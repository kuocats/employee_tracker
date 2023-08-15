const db = require('./config/connection.js');
const { displayTitleText } = require('./lib/specialText.js');
const selectTask = require('./lib/selectTask.js');

db.connect(function (err) {
    if (err) throw err;
    init ();
});

function init (){
    displayTitleText();
    selectTask();
};