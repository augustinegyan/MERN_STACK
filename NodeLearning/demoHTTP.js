var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});//response from server to be HTML
    res.write("Hello World");
    res.end();
}).listen(8010);//listening port 
