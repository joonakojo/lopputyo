let express = require('express');
let router = express.Router();
router.get('/form', function(req, res, next) { 

res.render('users'); 
});
router.post('/create', function(req, res, next) {

  // store all the user input data
  const userDetails=req.body;
  console.log(userDetails)

}); 
module.exports = router;