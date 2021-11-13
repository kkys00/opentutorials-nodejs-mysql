var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ubuntu1604',
    database: 'opentutorials'
  });
  db.connect();
  module.exports = db; //여러 개일 때는 exports만 써도 됨.