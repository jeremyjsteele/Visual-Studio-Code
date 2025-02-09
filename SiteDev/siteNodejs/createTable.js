var mysql = require('mysql');

	var con = mysql.createConnection({
  		host: "localhost",
  		user: "developer",
  		password: "SQL@Js09151978",
  		database: "new"
});
		con.connect(function(err) {
  		if (err) throw err;
  		console.log("Connected!");
  		var sql = "CREATE TABLE name (name VARCHAR(255), address VARCHAR(255))";
		con.query(sql, function (err, result) {
    			if (err) throw err;
    			console.log("Table created with primary key id inserted 2 member records.");
  			});
		}); 