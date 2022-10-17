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

function quit() {
  process.exit();
}

function viewAllDepartments() {
  db.promise().query('SELECT * FROM department')
    .then(data => {
      console.log('\n')
      console.table(data[0]);
      init();
    })
}

function viewEmployees() {
  db.promise().query('SELECT * FROM employee')
    .then(data => {
      console.log('\n')
      console.table(data[0]);
      init();
    })
}

function viewAllRoles() {
  db.promise().query('SELECT * FROM role')
    .then(data => {
      console.log('\n')
      console.table(data[0]);
      init();
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
          name: 'view all department',
          value: 'view_Department'
        },
        {
          name: 'view all employees',
          value: 'view_Employees'
        },
        {
          name: 'view all roles',
          value: 'view_AllRoles'
        },
        {
          name: 'quit',
          value: 'quit'
        },
      ]
    }
  ]).then(result => {
    let data = result.choice
    console.log(data);
    switch(data) {
      case 'view_Employees':
        viewAllDepartments();
        break;
      case 'view_Employees':
        viewEmployees();
        break;
        case 'view_AllRoles':
        viewAllRoles();
        break;
        default:
        quit();
    }
  })
}

init();