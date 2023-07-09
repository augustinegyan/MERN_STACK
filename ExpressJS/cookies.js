 const express = require('express')
 const app = express()


 const cookieParser = require('cookie-parser')
 app.use(cookieParser())

 app.get('/',(req , res) =>{
    res.send('Hello, Welcome to my Cookies 🍪')
 })
 app.get('/set-cookies',(req , res) => {
    res.cookie('augustine','geek')
    res.cookie('loso','dork')
    res.cookie('test','mic2',{
       // maxAge: 5000, //5 secs and cookie disappears
      // expires: new Date('20 July 2023'),
      secure: true,
    })
    res.send('Cookies has been set nicely')

 })

 app.get('/get-cookies',(req , res) =>{
    console.log(req.cookies)
    res.send(req.cookies)

 })

 app.get('/del-cookies',(req , res) =>{

 })




 app.listen(3000)