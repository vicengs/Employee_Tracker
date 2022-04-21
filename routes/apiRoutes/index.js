/* ----------------------------- */
/* Project  : Employee Tracker   */
/* File     : apiRoutes/index.js */
/* Author   : Vicente Garcia     */
/* Date     : 04/21/2022         */
/* Modified : 04/21/2022         */
/* ----------------------------- */
const express = require('express');
const router = express.Router();
router.use(require('./departmentRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./employeeRoutes'));
module.exports = router;