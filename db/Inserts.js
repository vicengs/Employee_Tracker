/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : Inserts.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
const db = require('./connection');
function Inserts(){
    Inserts.prototype.setInsert = function(table, name, salary, fk_id, last_name, manager_id){
        let sql = "INSERT INTO ";
        let params = [];
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
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log("Error => " + err.message);
            } else {
                console.log(name+" inserted to " + table + "s table successfully");
            };
        });
    };
};
module.exports = Inserts;