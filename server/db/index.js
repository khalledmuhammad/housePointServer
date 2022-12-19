const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql-100424-0.cloudclusters.net",
  database: "techlife",
  port: 10121,
  user: "admin",
  password: "housePoint911",
});

let housePoint = {};

housePoint.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
         select * from property
         inner join maincat on maincat.mid=property.Area
          inner join subcat on subcat.sid=property.Subarea  
          inner join property_type on property_type.type_id=property.Property_type  
          inner join furniture on furniture.ffid=property.Furniture_status 
          inner join image on image.cat = property.Id_property group by image.cat
          order by inhome desc, xdat desc limit 2000
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
    pool.query(
      ` select * from property where Id_property=? `,
      [id],
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
    pool.query(
      ` select * from image where cat=? and main=1 `,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

housePoint.selectForSale = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
         select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
 where property.Property_for='Sale'  
 group by image.cat
 order by inhome desc, xdat desc LIMIT 5    
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

housePoint.selectForRent = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
 where property.Property_for='Rent'  
 group by image.cat
 order by inhome desc, xdat desc LIMIT 5`,   
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

housePoint.selectInMaadi = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
 where property.Area=1
 group by image.cat
 order by inhome desc, xdat desc`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

housePoint.selectInMaadiSarayat = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
 where property.Subarea=2 
 group by image.cat
 order by inhome desc, xdat desc `,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

housePoint.selectInMaadiDegla = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
 where property.Subarea=5  
 group by image.cat
 order by inhome desc, xdat desc `,
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
