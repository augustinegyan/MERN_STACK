const pug = require('pug');
const path = require('path');
const express = require('express')

const app = express();
app.set('view engine', 'pug');

// Compile the source code
const compiledFunction = pug.compileFile(path.resolve(__dirname, 'views', 'firstview.pug'));

// Render a set of data
console.log(compiledFunction({
  firstname: 'Augustine'
}));
// Output: "<p>Augustine's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  firstname: 'Forbes'
}));
// Output: "<p>Forbes's Pug source code!</p>"
//
app.get('/', (req , res) =>{
    res.render('firstview',{
        firstname : 'Augustine'
    })
}).listen(3000)

