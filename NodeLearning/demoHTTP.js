var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});//response from server to be HTML
    res.write("Hello World");
    res.end();
}).listen(8010);//listening port 

var hTTP = require('http'); //<= called the HTTP module
hTTP.createServer((req , res)=>{
    res.write("Hello world . this is just a view made with the ES6 style")
    res.end();
}).listen(8070); 
