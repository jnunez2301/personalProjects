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

// Influencers
router.get('/influencer', async function(req, res, next){
    const sql= `SELECT * FROM influencers`;
    try{
        const results = await db.query(sql);
        res.json(results);
    }catch(err){
        console.log(err.message);
        next(err);
    }
})

router.get('/routines/:uses_weights',async function(req, res, next){
    const uses_weightsParam = req.params.uses_weights;
    
    const sql = `SELECT * FROM routines WHERE uses_weights = ?`
    try {
        const results = await db.query(sql, [uses_weightsParam]);
        res.json(results); 
    } catch (err) {
        console.error(`Error while getting data from the database: `, err.message);
        next(err);
    }
})

router.get('/routine/:type/:name', async function(req, res, next){
    const typeParam = req.params.type;
    const routineName = `%${req.params.name}%`;
    const sql = `SELECT ur.exercise_id, ur.user_id, e.body_part, e.exercise_name, e.description, e.youtubeSrc, u.user_handle, ur.routine_name, ur.weights_calisthenics, ur.sets, ur.reps, ur.rest, r.routine_img, r.routine_name, r.routine_description
    FROM user_routines ur
    JOIN exercises e ON ur.exercise_id = e.exercise_id
    JOIN users u ON ur.user_id = u.user_id
    JOIN routines r ON ur.user_id = r.user_id
    WHERE r.uses_weights = ? AND e.uses_weights = ? AND ur.routine_name LIKE ?
    ORDER BY ur.routine_name AND ur.exercise_id
    `;
    try {
        const results = await db.query(sql, [typeParam, typeParam, routineName]);
        res.json(results); 
    } catch (err) {// Send the results as JSON
        console.error(`Error while getting data from the database: `, err.message);
        next(err);
    }
})
module.exports = router;