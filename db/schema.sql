/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : schema.sql       */
/* Author   : Vicente Garcia   */
/* Date     : 04/20/2022       */
/* Modified : 04/20/2022       */
/* --------------------------- */
-- Eliminate tables if exists
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;
-- Create departments table
CREATE TABLE departments (
    id   INTEGER AUTO_INCREMENT PRIMARY KEY
   ,name VARCHAR(30)            NOT NULL
);
-- Create roles table
CREATE TABLE roles (
    id            INTEGER AUTO_INCREMENT PRIMARY KEY
   ,title         VARCHAR(30)            NOT NULL
   ,salary        DECIMAL(10,2)          NOT NULL
   ,department_id INTEGER                NOT NULL
   ,CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE RESTRICT
);
-- Create employees table
CREATE TABLE employees (
    id         INTEGER AUTO_INCREMENT PRIMARY KEY
   ,first_name VARCHAR(30)            NOT NULL
   ,last_name  VARCHAR(30)            NOT NULL
   ,role_id    INTEGER                NOT NULL
   ,manager_id INTEGER
   ,CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
   ,CONSTRAINT fk_managers FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);