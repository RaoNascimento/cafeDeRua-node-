var mysql = require('mysql');
var connMySQL = function () {
    console.log('Conexao estabelecida'); // A conexão so aciona quando é chamada
  
        return mysql.createConnection({

            host: 'localhost',
            user: 'root',
            password: '172901',
            database: 'portal_noticias'

        });
    }

    module.exports = function () {
        console.log('O autoload carregou');
        return connMySQL;  

}