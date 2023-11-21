const express = require('express');
const db = require('../../services/db');
const router = express.Router();


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

module.exports = router;