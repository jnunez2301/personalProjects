const secret = require('./utils/secret');

const config = {
    db: {
        host: 'sql8.freemysqlhosting.net',
        user: secret.username,
        password: secret.password,
        database: 'sql8664785',
        /* connectTimeout: 60000 */
    },
    /* Pagination:
     listPerPage: 10, */
}

module.exports = config;