let express = require('express');

let router = express.Router();
let db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('users'); 
});
router.post('/create', function(req, res, next) {


  // store all the user input data
  const userDetails=req.body;
  console.log(userDetails)
 
  // insert user data into users table
//   let sql = 'INSERT INTO users SET ?';
// let sql = `INSERT INTO users (fullName, emailAddress, city, country) VALUES ('${userDetails.name}', '${userDetails.email}', '${userDetails.code}', '${userDetails.message}')`;


//     connection.query(sql, function (err, data) { 
//         if (err) throw err;
//         console.log("User dat is inserted successfully "); 
//     });    

    
//  res.redirect('/users/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;