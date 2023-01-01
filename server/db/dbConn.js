const mysql = require("mysql");

/* const pool = mysql.createPool({
  host: "mysql-100424-0.cloudclusters.net",
  database: "techlife",
  port: 10121,
  user: "admin",
  password: "housePoint911",
  charset : 'utf8'
}); */

 const pool = mysql.createPool({
  host: "mysql-101810-0.cloudclusters.net",
  database: "techlife",
  port: 18063,
  user: "admin",
  password : "egFTmzTF",
  charset : 'utf8'
});


module.exports= pool;
