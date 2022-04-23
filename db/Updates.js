/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : Updates.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
const db = require('./connection');
function Updates(){
    Updates.prototype.setUpdate = function(table, id, change){
        let fkChange = "role_id";
        if (table === "Employee's manager"){
            fkChange = "manager_id"
        };
        const sql = `UPDATE employees
                        SET ${fkChange} = ? 
                      WHERE id          = ?`;
        const params = [change, id];
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log("Error => " + err.message);
            } else if (!result.affectedRows) {
                console.log("No Data Found");
            } else {
                console.log(`
  Go to search to review your changes
`);
            };
        });
    };
};
module.exports = Updates;