const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'eshop',
    password: ''
});

module.exports = pool.promise();