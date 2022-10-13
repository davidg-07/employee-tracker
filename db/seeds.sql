USE company_db;
INSERT INTO department (name) VALUES 
("sales"), 
("marketing"),
("hr"),
("front desk");

INSERT INTO role (title, salary, department_id) VALUES 
("sales lead", 60000, 1), 
("marketing lead", 55000, 2),
("hr manager", 50000, 3),
("front desk associate", 40000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("stacy", "gardner", 1, NULL),
("steve", "doolittle", 2, NULL),
("jeff", "gruden", 3, NULL),
("wayne", "beckham", 4, 1);