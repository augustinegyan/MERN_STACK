

var mysql = require('mysql2'); // or mysql

var con = mysql.createConnection({
  host: "***",
  user: "***",
  password: "***",
  database: "***"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SQL QUERIES HERE"; // all sql queries can be made here .
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("SAMPLE MESSAGE");
  });
});

