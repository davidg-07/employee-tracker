# employee-tracker

## Description

CMD Line program to help track employees by departments and roles.  Will also show the salary for positions. Able to add, edit, and delete departments, roles, and employees.

## User Sory

AS A business owner  
I WANT to be able to view and manage the departments, roles, and employees in my company  
SO THAT I can organize and plan my business  


## Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I start the application  
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  
WHEN I choose to view all departments  
THEN I am presented with a formatted table showing department names and department ids  
WHEN I choose to view all roles  
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role  
WHEN I choose to view all employees  
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  
WHEN I choose to add a department  
THEN I am prompted to enter the name of the department and that department is added to the database  
WHEN I choose to add a role  
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database  
WHEN I choose to add an employee  
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database  
WHEN I choose to update an employee role  
THEN I am prompted to select an employee to update and their new role and this information is updated in the database  


---
## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits) 
  
---

## Installation  

- Clone program from this repository to your computer using the SSH.
- Open the files within VS Code or prefered coding editor.  
- Open the "Main" file within the intergreated terminal.  
- Type in "npm i" to install npm modules.  
- On line 21 of the server.js file, please make sure that you add in your mysql password.  
- Open mysql and source the schema and seed the tables
- Exit mysql 
- Within in terminal type "npm start" and have fun! 
  
---

## Usage

This program gives one the ability to manager an employee database using SQL. 


## Credits
If you have any questions about this projects, please contact me directly at david.dmg17@gmail.com. You can view more of my projects at https://github.com/davidg-07.