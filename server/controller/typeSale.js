const pool = require("../db/dbConn")

let typeSale = {};

typeSale.selectForSaleApartment = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=2
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
typeSale.selectForSaleduplex = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=1
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

typeSale.selectForSaleGrondFloorDuplex = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=3
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

typeSale.selectForSaleGroundFloor = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=4
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

typeSale.selectForSalePentHouse = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=5
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

typeSale.selectForSaleVilla = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=6
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

typeSale.selectForSaleRoof = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=7
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

typeSale.selectForSaleStudio = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=8
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

typeSale.selectForSalePentHouseDuplex = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=9
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

typeSale.selectForSalePentHouseTriplex = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=10
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

typeSale.selectForSaleGroundFloorTriplex = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=11
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

typeSale.selectForSaleAdminstrationBuilding = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=12
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

typeSale.selectForSaleTwinHouse = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=13
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

typeSale.selectForSaleBuilding = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=14
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

typeSale.selectForSaleChalet = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=17
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

typeSale.selectForSaleTownHouse = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=19
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

typeSale.selectForSaleLand = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=19
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

typeSale.selectForSaleFlat = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=20
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

typeSale.selectForSaleCommercialStore = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=21
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

typeSale.selectForSaleOffice = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=22
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

typeSale.selectForSaleOfficeAdmin = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
   where property.Property_for='Sale' and Property_type=23
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

module.exports = typeSale;
