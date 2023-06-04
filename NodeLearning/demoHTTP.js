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



// Another Implementation of HTTP request and response with url 
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url ==='/dashboard/sales'){
        res.write("Total sales here");
        res.end();
    }
    if(req.url === '/api'){
        const wpm = 100;
        const obj = {
            name :"20fingers",
            typeSpeed : `${wpm}`,
            sex : "male"
        };
        res.write(JSON.stringify(obj));
        res.end();
    }
});
server.listen(3030)
