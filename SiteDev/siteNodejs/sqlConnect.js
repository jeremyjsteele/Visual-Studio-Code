var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "developer",
  password: "SQL@Js09151978"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});