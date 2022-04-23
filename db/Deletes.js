/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : Deletes.js       */
/* Author   : Vicente Garcia   */
/* Date     : 04/22/2022       */
/* Modified : 04/22/2022       */
/* --------------------------- */
const db = require('./connection');
function Deletes(){
    Deletes.prototype.setDelete = function(table, id){
        const sql = `DELETE
                       FROM ${table}s
                  WHERE id = ?`;
        const params = [id];
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
module.exports = Deletes;