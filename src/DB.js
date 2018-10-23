var mysql = require('mysql')
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database : process.env.DB_NAME
})
var email = 'acor@gmail.com';
var password = 'admin';

connection.connect()

// var sql = 'CALL LogIn(?,?)';

// connection.query(sql, [email, password], function (error, results, fields) {
//   if (error) throw error;
//   console.log('The result is: ', results);
// });
module.exports = connection;