/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : connection.js    */
/* Author   : Vicente Garcia   */
/* Date     : 04/20/2022       */
/* Modified : 04/20/2022       */
/* --------------------------- */
// Add MySql methods
const mysql = require('mysql2');
// Credentials to connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'vicente',
      password: 'Bootcamp',
      database: 'company'
    }
);
module.exports = db;