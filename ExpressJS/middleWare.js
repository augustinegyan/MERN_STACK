const express = require('express')
const app = express()


/*Use this in your Windows commandline to destroy PORT runnings 
    [1] - netstat -ano | findstr : PORTNUMBER
    [2] - taskkill /PID <PID> /F (Kindly replace the whole <PID> with the PID of the Port running )
*/
app.use(logger)

app.get('/', (req , res) => {
    res.send('Home')
    console.log('HomePage')
})

app.get('/users',auth ,(req ,res) =>{ //auth middleware implemented here
    res.send('Users page')
    console.log('UsersPage')
})


function logger (req, res, next) {
    console.log('Log here')
    next()
}



function auth (req , res , next){
    if(req.query.admin === 'true'){ //localhost:4000/users?admin=true
        next()
        return
    }else {
        res.send('No Authentication')
        console.log("could not authenticate")
    }
}

app.listen(4000,()=>{
    console.log("SERVER STARTED ^ ^ on PORT 4000")
})