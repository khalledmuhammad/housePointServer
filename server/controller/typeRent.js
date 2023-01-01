const pool = require("../db/dbConn");

let typeRent = {};


typeRent.selectForRentProperty = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   
   where ? IN(type_ar_slug , type_en_slug)  and  property.Property_for='Rent'
   group by image.cat
   order by inhome desc, xdat desc
    limit 1000`,[type],

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

typeRent.selectForRentPropertyLocation = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   
   where ? IN(type_ar_slug , type_en_slug)  and  property.Property_for='Rent'
   group by image.cat
   order by inhome desc, xdat desc
    limit 1000`,[type],

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

typeRent.selectForSaleProperty = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   
   where ? IN(type_ar_slug , type_en_slug)  and  property.Property_for='Sale'
   group by image.cat
   order by inhome desc, xdat desc
    limit 1000`,[type],

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = typeRent;
