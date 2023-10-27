CREATE DATABASE companydb;
USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
) 
DESCRIBE employee;

/* para insertar o pasar datos en nuestra base de datos lo hacemos de la siguiente manera */
INSERT INTO employee VALUES 
    (1, 'Joe', 1000),
    (2, 'Maria', 2000),
    (3, 'Lucas', 6000),
    (4, 'Ottoniel', 8000),