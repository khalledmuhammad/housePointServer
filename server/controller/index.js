const pool = require("../db/dbConn");

let housePoint = {};

/* get all home and single home */

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
        } else {
          return resolve(results);
        }
      }
    );
  });
};

housePoint.allProp = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
         select * from property
         inner join maincat on maincat.mid=property.Area
          inner join subcat on subcat.sid=property.Subarea  
          inner join property_type on property_type.type_id=property.Property_type  
          inner join furniture on furniture.ffid=property.Furniture_status 
          order by inhome desc, Id_property desc limit 2500
 `,
      (err, results) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(results);
        }
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
          order by inhome desc, xdat desc limit 8
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

housePoint.singleProperty = (slug) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `   select * from property 
            inner join maincat on maincat.mid=property.Area
            inner join subcat on subcat.sid=property.Subarea  
            inner join property_type on property_type.type_id=property.Property_type  
            inner join furniture on furniture.ffid=property.Furniture_status 
           where ? IN(slug_ar , slug_en) `,
      [slug],
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
    pool.query(` select * from image where cat=?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/* all for sale in main places */

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

/* all for rent in main places */

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
 order by inhome desc, xdat desc limit 2500
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

/* for rent property type */

/*  for rent places */

housePoint.selectForRentMaadi = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
 where property.Property_for='Rent' and  property.Area=1
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

housePoint.selectForRentNewCairo = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
 where property.Property_for='Rent' and  property.Area=4
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

housePoint.selectForRentKatamya = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
      select * from property
inner join maincat on maincat.mid=property.Area 
inner join subcat on subcat.sid=property.Subarea  
inner join image on image.cat = property.Id_property 
inner join property_type on property_type.type_id=property.Property_type  
inner join furniture on furniture.ffid=property.Furniture_status 
 where property.Property_for='Rent' and  property.Area=17
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

/* select in these places */
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

/*  get blogs and single blog */
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

housePoint.singleBlog = (slug) => {
  return new Promise((resolve, reject) => {
    pool.query(
      ` select * from blog 
      where ? IN(slug_ar , slug_en) `,
      [slug],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

housePoint.getCountry = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      ` select * from country  `,
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
