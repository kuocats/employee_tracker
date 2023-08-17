INSERT INTO department (name)
VALUES 
('Finances'), 
('Marketing'), 
('Operation Management'), 
('Sales'), 
('Information Technology'), 
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES 
('Accountant', 100000, 1), 
('Social Media Marketer', 70000, 2), 
('Project Manager', 90000, 3), 
('Sales Associate', 60000, 4), 
('IT Specialist', 120000, 5), 
('Talent Management', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jessica', 'Day', 1, 2),
('Nick', 'Miller', 2, 5),
('Winston', 'Schmidt', 3, 5),
('Cece', 'Parekh', 4, 5),
('Winston', 'Bishop', 5, NULL),
('Aly', 'Nelson', 6, 9),
('Ryan', 'Geauxinue', 1, 9),
('Paul', 'Genzlinger', 2, 9),
('Abby', 'Day', 5, NULL);