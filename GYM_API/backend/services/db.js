const mysql = require('mysql2/promise');
const config = require('../config');

const pool = mysql.createPool(config.db);

async function query(sql, params) {
    const connection = await pool.getConnection(); // Use pool.getConnection() to get a connection from the pool
    try {
        const [results] = await connection.execute(sql, params);
        return results;
    } finally {
        connection.release(); // Release the connection back to the pool after using it
    }
}

module.exports = {
    query
};
