/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : Deletes.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
// Add db library to conect database
const db = require('./connection');
// Function Deletes
function Deletes(){
    // Method to apply a delete
    Deletes.prototype.setDelete = function(table, id){
        // Variable with delete statement
        const sql = `DELETE
                       FROM ${table}s
                  WHERE id = ?`;
        // Variable with parameters
        const params = [id];
        // Execute db instruction (delete)
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log("Error => " + err.message);
            } else if (!result.affectedRows) {
                console.log("No data Found");
            } else {
                console.log(`
  Go to search to review your data deleted
`);
            };
        });
    };
};
// Export module Deletes
module.exports = Deletes;