/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : Updates.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
// Add db library to conect database
const db = require('./connection');
// Function Updates
function Updates(){
    // Method to apply a update
    Updates.prototype.setUpdate = function(table, id, change){
        // Variable to determine the foreign key to update
        let fkChange = "role_id";
        if (table === "Employee's manager"){
            fkChange = "manager_id"
        };
        // Variable with statement
        const sql = `UPDATE employees
                        SET ${fkChange} = ? 
                      WHERE id          = ?`;
        // Variable with params
        const params = [change, id];
        // Execute db instruction (update)
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
// Export module Updates
module.exports = Updates;