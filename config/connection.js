const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user:'root',
        password: 'Racesen22dd!',
        database: 'employee_db'
    },

   console.log('\u001b[33m', `Connected to the employee_db database!`) 
);

module.exports = db;