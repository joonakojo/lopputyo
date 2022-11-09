const express= require('express');
const port= process.env.PORT || 5000; // This is our port number


const app = express(); // This is our app or instance of express


// API Middlewares

app.use(express.json()); // This is to accept data in JSON format

app.use(express.urlencoded()); // This is basically to decode the data send through html form

app.use(express.static('public')); // This to serve our public folder as a static folder


// API Routes

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/formPost',(req,res)=>{
    console.log(req.body); // The data we get is in the body of request
})

// This is basically to listen on port

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
});

