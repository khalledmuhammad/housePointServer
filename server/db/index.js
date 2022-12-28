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
          order by inhome desc, xdat desc limit 2500
 `,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        else{

          return resolve(results);}
      }
    );
  });
};

housePoint.allHome = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
         select * from property
         inner join maincat on maincat.mid=property.Area
          inner join subcat on subcat.sid=property.Subarea  
          inner join property_type on property_type.type_id=property.Property_type  
          inner join furniture on furniture.ffid=property.Furniture_status 
          inner join image on image.cat = property.Id_property group by image.cat
          order by inhome desc, xdat desc limit 15
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
      ` select * from property 
             inner join maincat on maincat.mid=property.Area
          inner join subcat on subcat.sid=property.Subarea  
          inner join property_type on property_type.type_id=property.Property_type  
          inner join furniture on furniture.ffid=property.Furniture_status 
      where Id_property=? `,
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
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
 where property.Property_for='Sale'  
 group by image.cat
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

housePoint.selectForRent = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
 where property.Property_for='Rent'  
 group by image.cat
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

housePoint.selectInMaadi = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
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
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
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
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
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

housePoint.selectInKatamya = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
where property.Area=17
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

housePoint.selectInNewCairo = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
where property.Area=4
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

housePoint.getBlogsList = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from blog `,
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
