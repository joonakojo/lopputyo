const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'OnSeFiksu1234',      
  database: 'nodeapp', 
  port: 5500
}); 

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;