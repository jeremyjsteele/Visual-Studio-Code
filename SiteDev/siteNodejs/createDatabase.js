var mysql = require('mysql');

	var con = mysql.createConnection({
  		host: "localhost",
  		user: "developer",
  		password: "SQL@Js09151978"
		});

		con.connect(function(err) {
  			if (err) throw err;
  			console.log("Connected!");
 			con.query("CREATE DATABASE new", function (err, result) {
    			if (err) throw err;
    			console.log("Database created");
  			});
		});