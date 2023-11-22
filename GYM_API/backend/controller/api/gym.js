const express = require('express');
const db = require('../../services/db');
const router = express.Router();


// Get all exercises
router.get('/exercises', async function(req, res, next) {
    const sql = `select * from exercises`;
    try {
        const results = await db.query(sql);
        res.json(results); // Send the results as JSON
    } catch (err) {
        console.error(`Error while getting data from the database: `, err.message);
        next(err);
    }
});

// Look for a specific exercise
router.get('/exercises/:id', async function(req, res, next) {
    const idParam = parseInt(req.params.id);
    const sql = `select * from exercises WHERE exercise_id = ?`;
    try {
        const results = await db.query(sql, [idParam]);
        res.json(results); 
    } catch (err) {// Send the results as JSON
        console.error(`Error while getting data from the database: `, err.message);
        next(err);
    }
});

router.get('/routines/:type',async function(req, res, next){
    const typeParam = req.params.type;
    const sql = `SELECT ur.exercise_id, ur.user_id, e.body_part, e.exercise_name, u.user_handle, ur.routine_name, ur.weights_calisthenics
    FROM user_routines ur
    JOIN exercises e ON ur.exercise_id = e.exercise_id
    JOIN users u ON ur.user_id = u.user_id
    WHERE ur.weights_calisthenics = ?
    ORDER BY user_id
    `
    try {
        const results = await db.query(sql, [typeParam]);
        res.json(results); 
    } catch (err) {// Send the results as JSON
        console.error(`Error while getting data from the database: `, err.message);
        next(err);
    }
})
module.exports = router;