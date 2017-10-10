var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '7777777',
        database: 'cafederua'
    });
}

module.exports = function() {
    return connMySQL;
}