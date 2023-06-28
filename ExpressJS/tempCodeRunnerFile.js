const express = require('express')
const app = express()


app.use(logger)

app.get('/', (req , res) => {
    res.send('Home')
})

app.get('/users',(req ,res) =>{
    res.send('Users page')
})

function logger (req, res, next) {
    console.log('Log here')
    next()
}

app.listen(4000,()=>{
    console.log("SERVER STARTED ^ ^ on PORT 4000")
})