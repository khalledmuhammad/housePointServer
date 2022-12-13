const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  database: "techlife",
  // port: 8889,
  user: "root",
  password: "",
});

let housePoint = {};

housePoint.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(
        ` select * from property inner join maincat on maincat.mid=property.Area
          inner join subcat on subcat.sid=property.Subarea  
          inner join image on image.cat = property.Id_property group by image.cat
          order by inhome desc, xdat desc
 `,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

housePoint.singleProperty = (id) => {
    return new Promise((resolve, reject) => {
      pool.query( ` select * from property where Id_property=? `,[id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results[0]);
        }
      );
    });
  };



housePoint.image = (id) => {
    return new Promise((resolve, reject) => {
      pool.query( ` select * from image where cat=? and main=1 `,[id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };






module.exports = housePoint;
