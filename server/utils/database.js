const mysql = require('mysql2');

const db_config = require('./db_config.json');

const pool = mysql.createPool({
    host: db_config.host,
    user: db_config.user,
    database: db_config.database,
    password: db_config.password,
});

module.exports = pool.promise();
