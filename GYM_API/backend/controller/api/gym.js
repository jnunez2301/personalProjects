const express = require('express');
const db = require('../../services/db');
const router = express.Router();


// Get all exercises
router.get('/exercises', async function (req, res, next) {
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
router.get('/exercises/:id', async function (req, res, next) {
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
router.get('/exercises/:uses_weights/:body_part', async (req, res, next) => {
    const bodyPartParam = req.params.body_part;
    const usesWeightsParam = req.params.uses_weights;
    const sql = `SELECT * FROM exercises WHERE body_part = ? AND uses_weights = ?`
    try {
        const results = await db.query(sql, [bodyPartParam, usesWeightsParam]);
        res.status(200).json(results);
    } catch (err) {
        console.error(err.message);
        res.status(404).json({ msg: 'Exercises not found' });
        next(err)
    }
})
// USER INFO
router.get('/user/:user_handle', async (req, res, next) => {
    const user_handle = req.params.user_handle;
    const sql = `SELECT 
    u.user_id, u.user_handle, u.email_address, u.first_name, u.last_name, u.user_img, u.created_at, u.user_background_img,
    r.routine_alias, r.routine_name, r.routine_description, r.routine_img, r.uses_weights, r.routine_id
    FROM users u
    LEFT JOIN routines r ON r.user_id = u.user_id
    WHERE u.user_handle = ?`;
    try {
        const results = await db.query(sql, [user_handle]);
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(403).json({ msg: 'user does not exist' })
        }
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
})
// Update profile pic

router.put('/user/photo/:user_handle', async (req, res) => {
    const username = req.params.user_handle;
    const { user_img, user_background_img } = req.body;
    if (!user_img && !user_background_img) {
        return res.status(400).json({ error: 'Provide at least one update field.' });
    }
    let updateFields = [];
    let updateValues = [];
    if (user_img) {
        updateFields.push('user_img = ?');
        updateValues.push(user_img);
    }
    if (user_background_img) {
        updateFields.push('user_background_img = ?');
        updateValues.push(user_background_img);
    }
    const updateQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE user_handle = ?`;
    try {
        const results = await db.query(updateQuery, [...updateValues, username]);
        res.status(203).json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'BAD REQUEST' })
    }
})

// Influencer
router.get('/influencer', async function (req, res, next) {
    const sql = `SELECT * FROM influencers`;
    try {
        const results = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})

router.get('/routines/:uses_weights', async function (req, res, next) {
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

router.get('/routine/:type/:name', async function (req, res, next) {
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
// POST ROUTINE BY USER

router.post('/new-routine/:user_id', async (req, res) => {
    const userParam = req.params.user_id;
    const routines = req.body; // Assuming the request body is an array of routines

    try {
        if (routines.length < 5) {
            res.status(500).json({msg: 'Make sure you have at least 5 exercises'});
            return;
        }
        
        for (const routine of routines) {
            const { exercise_id, routine_name, routine_description, routine_img, uses_weights, reps, rest, sets } = routine;

            const words = routine_name.split(' ');

            // Extract the initial letter of each word and capitalize it
            const initials = words.map(word => word.charAt(0).toUpperCase());

            // Join the initials into a string
            const routine_alias = initials.join(''); 
            // Assuming you have a MySQL connection object named 'connection'
            const sql = `
            INSERT INTO personal_routines(exercise_id, user_id, routine_name, routine_description, routine_img, uses_weights, sets, reps, rest, routine_alias)
            VALUES (?, ?, ?, ?, ?, ?,?, ?, ?, ?)`;

            // Assuming you have a function to execute queries, for example 'executeQuery'
            
            await db.query(sql,
            [exercise_id, userParam, routine_name, routine_description, routine_img, uses_weights, sets, reps, rest, routine_alias]);
        }

        // Send a response back to the client
        console.log('Routine inserted successfully');
        res.status(201).json({ message: 'Routines added successfully!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'bad request' });
    }
});
// Get Personal Routine
router.get('/routine/personal/:routine_alias/:user_id', async (req, res) => {
    const { routine_alias, user_id } = req.params;
    sql = `SELECT 
    e.body_part, e.exercise_name, e.description, e.youtubeSrc,
    pr.routine_name, pr.routine_description, pr.routine_img, pr.exercise_id, pr.sets, pr.reps, pr.rest
    FROM personal_routines pr
    JOIN exercises e ON pr.exercise_id = e.exercise_id 
    WHERE routine_alias = ? AND user_id = ?`;
    try {
        const results = await db.query(sql, [routine_alias, user_id]);
        res.status(200).json(results);
    } catch (err) {// Send the results as JSON
        console.error(`Error while getting data from the database: `, err.message);
        res.status(404).json({msg: 'routine not found'});
    }

    })
router.get('/personalRoutines/:user_id', async (req, res) => {
    const {user_id} = req.params;

    const sql = `SELECT DISTINCT routine_name, user_id, routine_img, routine_description, routine_alias, deleted_routine FROM personal_routines WHERE user_id = ?`;
    try{
        const results = await db.query(sql, [user_id]);
        res.status(200).json(results);
    }catch(error){
        console.error(`Error while getting data from the database: `, error.message);
        res.status(404).json({msg: 'routines not found'});
    }
})
router.put('/deleteRoutine/:routine_alias/:user_id', async (req, res) =>{
    const {routine_alias, user_id} = req.params;
    const sql = `UPDATE personal_routines SET deleted_routine = 0
    WHERE routine_alias = ? AND user_id = ?`;
    try{
        const results = await db.query(sql, [routine_alias, user_id]);
        res.status(201).json({msg: 'Routine DELETED'})
    }catch(error){
        console.log(error.message);
        res.status(501).json({msg: 'failed to delete bad request'});
    }
})

router.get('/weight_progress/:user_id', async (req, res) =>{
     const { user_id } = req.params;
     const sql = `SELECT * FROM user_weight_progress WHERE user_id = ? ORDER BY created_at DESC LIMIT 10;`
     try{
        const results = await db.query(sql, [user_id]);
        res.status(201).json(results)
     }catch(error){
        console.log(error.message);
        res.status(404).json({msg: 'failed to find the weight_progress'})
     }
})
router.post('/weight_progress/:user_id', async(req, res) =>{
    const { weight_progress } = req.body;
    const {user_id} = req.params;
    
    const sql = `INSERT INTO user_weight_progress(weight_progress, user_id)
    VALUES(?, ?)`;

    try{
        const results = await db.query(sql, [weight_progress,user_id])
        
        res.status(201).json({msg: 'Updated weight_progress'})
    }catch(error){
        console.log(error.message);
        res.status(500).json({msg: 'bad request could not find the user'})
    }
})


module.exports = router;