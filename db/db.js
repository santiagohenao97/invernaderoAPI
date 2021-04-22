const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;