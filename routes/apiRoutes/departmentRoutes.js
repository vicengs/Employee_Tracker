/* ------------------------------ */
/* Project  : Employee Tracker    */
/* File     : departmentRoutes.js */
/* Author   : Vicente Garcia      */
/* Date     : 04/21/2022          */
/* Modified : 04/21/2022          */
/* ------------------------------ */
const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
//const inputCheck = require('../../utils/inputCheck');
// Get all departments
router.get('/departments', (req, res) => {
    const sql = `SELECT *
                   FROM departments`;
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
// Get a single department
router.get('/department/:id', (req, res) => {
    const sql = `SELECT *
                       ,name 
                   FROM departments 
                  WHERE id = ?`;
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
// Create a department
router.post('/department', ({ body }, res) => {
    /*const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    };*/
    const sql = `INSERT
                   INTO departments (name)
                 VALUES (?)`;
    const params = [body.name];
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
// Update a department name
router.put('/department/:id', (req, res) => {
    /*const errors = inputCheck(req.body, 'party_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    };*/
    const sql = `UPDATE departments
                    SET name = ? 
                  WHERE id   = ?`;
    const params = [req.body.name, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            // check if a record was found
        } else if (!result.affectedRows) {
                res.json({
                message: 'Department not found'
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
// Delete a department
router.delete('/department/:id', (req, res) => {
    const sql = `DELETE
                   FROM departments
                  WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
                res.json({
                message: 'Department not found'
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