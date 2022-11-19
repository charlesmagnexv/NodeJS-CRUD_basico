'use strict'
const mysql = require('mysql2');
const dbConn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'node_mysql_crud_db'
    }
);
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!")
});
module.exports = dbConn;
