//NODE URL MODULE
const url = require('url');
var link = 'http://localhost:8080/default.htm?year=2017&month=february';
var ink = url.parse(link , true);

console.log(ink.host); //Local HOst -> localhost:8080
console.log(ink.pathname); //Path -> /default.htm
console.log(ink.search); //Search -> ?year=2017&month=february

var qdata = ink.query;  //makes the query
console.log(qdata.month); // Value pair and key data