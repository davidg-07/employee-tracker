const inquirer = require('inquirer');
require('console.table')
// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Transformer$4',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

function viewEmployees() {
  db.promise().query('SELECT * FROM employee')
    .then(data => {
      console.table(data[0]);
    })
}

function init() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'welcome to employee tracker what would you like to do?',
      choices: [
        {
          name: 'view all employees',
          value: viewEmployees()
        }
      ]
    }
  ])
}

init();