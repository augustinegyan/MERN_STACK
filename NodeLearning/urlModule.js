//NODE URL MODULE
const url = require('url');
const http = require('http');
const fs = require('fs');


var link = 'http://localhost:8080/default.htm?year=2017&month=february';
var ink = url.parse(link , true);
console.log(ink.host); //Local HOst -> localhost:8080
console.log(ink.pathname); //Path -> /default.htm
console.log(ink.search); //Search -> ?year=2017&month=february

var qdata = ink.query;  //makes the query
console.log(qdata.month); // Value pair and key data


//FILE SYSTEM + URL 

const server = http.createServer(function (req, res) {
  	
  	// localhost:9000/test1.html 

  	const urlObject = url.parse(req.url, true);
  	const fileName = "." + urlObject.pathname;		// 		./test1.html 	

  	fs.readFile(fileName, function(err, data) {

  		if (err) {
  			res.writeHead(404, {'Content-Type': 'text/html'});
  			return res.end("404 Not Found");
  		}

  		res.writeHead(200, {'Content-Type': 'text/html'}); 
  		res.write(data);
  		res.end();
  	});

});

server.listen(9000, () => { 
	console.log('Server is running...'); 
}); 



