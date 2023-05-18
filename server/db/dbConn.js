const mysql = require("mysql");
require("dotenv").config();



const pool = mysql.createPool({
  host:process.env.HOST ,
  database: process.env.DATABASE,
  port: process.env.DBPORT ,
  user: process.env.DPUSER,
  password :process.env.DBPASS,
  charset : process.env.CHARST
});

module.exports= pool;
