const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'OnSeFiksu1234',      // Replace with your database password
  database: 'nodeapp', // // Replace with your database Name
  port: 5500
}); 

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;