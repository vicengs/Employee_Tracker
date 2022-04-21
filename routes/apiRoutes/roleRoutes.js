/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : roleRoutes.js    */
/* Author   : Vicente Garcia   */
/* Date     : 04/21/2022       */
/* Modified : 04/21/2022       */
/* --------------------------- */
const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
//const inputCheck = require('../../utils/inputCheck');
// Get all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT a.title  ROLE
                       ,FORMAT(a.salary, 2) SALARY
                       ,b.name   DEPARTMENT
                   FROM roles a
                       ,departments b
                  WHERE a.department_id = b.id
               ORDER BY a.salary DESC`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        };
        res.json({
            message: 'success',
            data: rows
        });
    });
});
// Get a single role
router.get('/role/:id', (req, res) => {
    const sql = `SELECT a.title  ROLE
                       ,FORMAT(a.salary, 2) SALARY
                       ,b.name   DEPARTMENT
                   FROM roles a
                       ,departments b
                  WHERE a.id = ?
                    AND a.department_id = b.id`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        };
        res.json({
            message: 'success',
            data: row
        });
    });
});
// Create a role
router.post('/role', ({ body }, res) => {
    /*const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    };*/
    const sql = `INSERT
                   INTO roles (title, salary, department_id)
                 VALUES (?, ?, ?)`;
    const params = [body.title, body.salary, body.department_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        };
        res.json({
            message: 'success',
            data: body
        });
    });
});
// Update a role salary
router.put('/role/:id', (req, res) => {
    /*const errors = inputCheck(req.body, 'party_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    };*/
    const sql = `UPDATE roles
                    SET salary = ? 
                  WHERE id   = ?`;
    const params = [req.body.salary, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            // check if a record was found
        } else if (!result.affectedRows) {
                res.json({
                message: 'Role not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        };
    });
});
// Delete a role
router.delete('/role/:id', (req, res) => {
    const sql = `DELETE
                   FROM roles
                  WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
                res.json({
                message: 'Role not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        };
    });
});
module.exports = router;