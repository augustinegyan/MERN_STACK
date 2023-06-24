const express = require('express');
const app = express();

const PORT = 4000;
const newPORT = process.env.newPORT || 2023;
app.listen(newPORT, () =>{
    console.log(`SERVER is also Running of PORT number ${newPORT}`)
})
app.listen(PORT, () =>{
   console.log( `Listening on PORT number : ${PORT}`)
});