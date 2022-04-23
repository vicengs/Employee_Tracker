/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : Inserts.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
// Add db library to conect database
const db = require('./connection');
// Function Inserts
function Inserts(){
    // Method to apply a insert
    Inserts.prototype.setInsert = function(table, name, salary, fk_id, last_name, manager_id){
        // Variable with statement
        let sql = "INSERT INTO ";
        // Variable with parameters
        let params = [];
        // Validate table and parameters to build insert statement
        if (table === "Department"){
            sql = `${sql} departments (name)
                   VALUES (?)`;
            params = [name];
        } else if (table == "Role"){
            sql = `${sql} roles (title, salary, department_id)
                   VALUES (?, ?, ?)`;
            params = [name, salary, fk_id];
        } else if (table == "Employee"){
            sql = `${sql} employees (first_name, last_name, role_id, manager_id)
                   VALUES (?, ?, ?, ?)`;
            params = [name, last_name, fk_id, manager_id];
        };
        // Execute db instruction (insert)
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log("Error => " + err.message);
            } else {
                console.log(name+" inserted to " + table + "s table successfully");
            };
        });
    };
};
// Export module Inserts
module.exports = Inserts;