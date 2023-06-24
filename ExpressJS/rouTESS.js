
const express = require('express');
const app = express();


const PORT  = 2021;

const names = [{firstname : "Augustine"} , {lastname : "gyan"}];
app.get('/name',(req , res ) =>{
     //res.send('Hello bla bla bla')
       res.send(names)
})

//We can also have multiple different methods at the same route
app.post('/name',(req ,res )=>{
    res.send("POSTED successfully")/*you can check the validigy
   wit the CURL commnad curl -X POST "http://localhost:2021/name"  
    OR use POSTMAN any enpoint software to test
     NB : make sure curl is installed and added to system path */ 
});
app.listen(PORT,()=>{
    console.log(`Server Running on Port : ${PORT}`)
});

var checkRoute = require('./routte.js');
app.use('/',checkRoute) //what app gets on '/' attaches the checkRoute router with it