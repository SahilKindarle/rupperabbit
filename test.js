var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "criminal1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
