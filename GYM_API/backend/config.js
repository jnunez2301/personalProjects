const secret = require('./utils/secret');


const config = {
    db: {
        host: 'localhost',
        user: secret.username,
        password: secret.password,
        database: 'gym',
        /* connectTimeout: 60000 */
    },
    /* Pagination:
     listPerPage: 10, */
}


module.exports = config;