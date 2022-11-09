const express= require('express');
const port= process.env.PORT || 5000; // This is our port number
const connection = require('./database');
const app = express(); // This is our app or instance of express
const usersRouter = require('./routes/users');


// API Middlewares

app.use('/users', usersRouter);
app.use(express.json()); // This is to accept data in JSON format
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')); // This to serve our public folder as a static folder


// API Routes

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/formPost',(req,res)=>{
    console.log(req.body); // The data we get is in the body of request
    const userDetails=req.body;
    console.log(userDetails)


let sql = `INSERT INTO users (fullName, emailAddress, city, country) VALUES ('${userDetails.name}', '${userDetails.email}', '${userDetails.code}', '${userDetails.message}')`;

connection.query(sql, function (err, data) { 
    if (err) throw err;
    console.log("User data is inserted successfully "); 
});    

res.redirect('/form');  // redirect to user form page after inserting the data
})

// This is basically to listen on port

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
});

