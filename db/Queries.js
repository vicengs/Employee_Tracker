/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : queries.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
require('console.table');
const db = require('./connection');
function Queries(){
    Queries.prototype.getQuery = function(search, condition){
        let sql;
        if (search === "Departments"){
            sql = `SELECT id   ID
                         ,name DEPARTMENT
                     FROM departments`;
        } else if (search === "Roles"){
            sql = `SELECT a.id     ID
                         ,a.title  ROLE
                         ,FORMAT(a.salary, 2) SALARY
                         ,b.name   DEPARTMENT
                     FROM roles a
                         ,departments b
                    WHERE a.department_id = b.id
                 ORDER BY a.salary DESC`;
        } else if (search === "Employees"){
            sql = `SELECT a.id     ID
                         ,CONCAT(a.first_name, ' ', a.last_name) NAME
                         ,b.title  POSITION
                         ,b.salary SALARY
                         ,c.name   DEPARTMENT
                         ,IFNULL(CONCAT(d.first_name, ' ', d.last_name), 'N/A') MANAGER
                     FROM employees   a
                LEFT JOIN employees d ON d.id = a.manager_id
                         ,roles       b
                         ,departments c
                    WHERE a.role_id       = b.id
                      AND b.department_id = c.id
                 ORDER BY a.id`;
        } else if (search === "Employees by Manager"){
            sql = `SELECT a.id ID
                         ,CONCAT(a.first_name, ' ', a.last_name) NAME
                         ,b.title POSITION
                         ,b.salary SALARY
                         ,c.name  DEPARTMENT
                         ,IFNULL(CONCAT(d.first_name, ' ', d.last_name), 'N/A') MANAGER
                     FROM employees   a
                LEFT JOIN employees d ON d.id = a.manager_id
                         ,roles       b
                         ,departments c
                    WHERE a.role_id       = b.id
                      AND b.department_id = c.id
                      AND d.first_name like '%${condition}%'
                    ORDER BY d.first_name
                            ,a.id`;
        } else if (search === "Employees by Department"){
            sql = `SELECT a.id ID
                         ,CONCAT(a.first_name, ' ', a.last_name) NAME
                         ,b.title POSITION
                         ,b.salary SALARY
                         ,c.name  DEPARTMENT
                         ,IFNULL(CONCAT(d.first_name, ' ', d.last_name), 'N/A') MANAGER
                     FROM employees   a
                LEFT JOIN employees d ON d.id = a.manager_id
                         ,roles       b
                         ,departments c
                    WHERE a.role_id       = b.id
                      AND b.department_id = c.id
                      AND c.name like '%${condition}%'
                    ORDER BY c.name
                            ,a.id`;
        } else if (search === "Budget by Department"){
            sql = `SELECT name DEPARTMENT
                         ,FORMAT(SUM(b.salary), 2) BUDGET
                     FROM employees   a
                LEFT JOIN employees d ON d.id = a.manager_id
                         ,roles       b
                         ,departments c
                    WHERE a.role_id       = b.id
                      AND b.department_id = c.id
                    GROUP BY c.name
                    ORDER BY SUM(b.salary) DESC`;
        };
        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err)
            };
            if (rows[0]){
                console.table("",rows);
            } else {
                console.log(`
  No data found in ${search} (${condition})
`);
            }
        });
    };
};
module.exports = Queries;