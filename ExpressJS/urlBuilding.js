var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
//some key value pairs with url in express
app.get('/me/:fname/:id',(req ,res)=>{
    res.send('first name : '+req.params.fname +'id :'+req.params.id);
})
app.listen(2000)

