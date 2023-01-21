const mysql = require("mysql");
require("dotenv").config();


/* const pool = mysql.createPool({
  host: "mysql-100424-0.cloudclusters.net",
  database: "techlife",
  port: 10121,
  user: "admin",
  password: "housePoint911",
  charset : 'utf8'
}); */

/*  const pool = mysql.createPool({
  host: "mysql-101810-0.cloudclusters.net",
  database: "techlife",
  port: 18063,
  user: "admin",
  password : "egFTmzTF",
  charset : 'utf8'
}); */

/*  const pool = mysql.createPool({
  host: "mysql-101810-0.cloudclusters.net",
  database: "techlife",
  port: 18063,
  user: "admin",
  password : "egFTmzTF",
  charset : 'utf8'
}); */

const pool = mysql.createPool({
  host:process.env.HOST ,
  database: process.env.DATABASE,
  port: process.env.DBPORT ,
  user: process.env.DPUSER,
  password :process.env.DBPASS,
  charset : process.env.CHARST
});

module.exports= pool;
