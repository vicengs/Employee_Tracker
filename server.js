/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : server.js        */
/* Author   : Vicente Garcia   */
/* Date     : 04/20/2022       */
/* Modified : 04/20/2022       */
/* --------------------------- */
//const express = require('express');
const index = require('./index');
const db = require('./db/connection');
//const app = express();
// Express middleware
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());
//app.use('/', index);
// Default response for any other request (Not Found)
//app.use((req, res) => {
//    res.status(404).end();
//});
// Start server after DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
// });