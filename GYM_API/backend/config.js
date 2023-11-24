const secret = require('./utils/secret');

const config = {
    db: {
        host: 'sql8.freemysqlhosting.net',
        user: process.env.MyUSER,
        password: process.env.MyPassword,
        database: 'sql8664785',
        /* connectTimeout: 60000 */
    },
    /* Pagination:
     listPerPage: 10, */
}

module.exports = config;