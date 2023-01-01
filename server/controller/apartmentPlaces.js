const pool = require("../db/dbConn");

let PropertyPlaces = {};

  /* rent and sale for Areas */


PropertyPlaces.rentPropertyMaadi = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
        select * from property
  inner join maincat on maincat.mid=property.Area 
  inner join subcat on subcat.sid=property.Subarea  
  inner join image on image.cat = property.Id_property 
  inner join property_type on property_type.type_id=property.Property_type  
  inner join furniture on furniture.ffid=property.Furniture_status 
  where  Area=1 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
  group by image.cat
   order by inhome desc, xdat desc 
   `,[type],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

PropertyPlaces.rentPropertyNewCairo = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
    where  Area=4 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
    group by image.cat
     order by inhome desc, xdat desc
     `,[type],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

PropertyPlaces.rentPropertyKatamya = (type) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
    where  Area=17 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
    group by image.cat
     order by inhome desc, xdat desc
     `,[type],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};



PropertyPlaces.salePropertyMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Property_for='Sale' And  ? IN(type_ar_slug , type_en_slug)
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.salePropertyNewCairo = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Property_for='Sale' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.salePropertyKatamya = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=17 AND Property_for='Sale' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  /*for  rent Property subAreas in maadi */

  PropertyPlaces.rentPropertyZahraaMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=1 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.rentPropertyMaadiSarayat = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where   Subarea=2 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.rentPropertyCornishMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=3 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.rentPropertyNewMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=4 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };


  PropertyPlaces.rentPropertyMaadiDegla = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=5 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.rentPropertyOldMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=6 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  /*for  rent Property subAreas in newCairo */

  
  PropertyPlaces.rentPropertyChouifat = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=7 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.rentPropertyWestGolf= (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=8 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyFifthSettle= (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=9 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyMountainView = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=79 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyLakeView = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=78 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyArabella = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=90 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyFirstSettle = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=33 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyMirageCity = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=91 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyMivida = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=89 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyMadinty = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=92 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyKatamyaDunnes = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=81 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyKatamyaResd = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=82 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyKatamyaHills = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=83 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyVillageGate = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=84 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyTheVillage = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=85 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
  PropertyPlaces.rentPropertyKatamyaPlaza = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=86 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.rentPropertyStonePark = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=87 AND Property_for='Rent' And  ? IN(type_ar_slug , type_en_slug)
      group by image.cat
       order by inhome desc, xdat desc
       `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };
  
/* for sale Property subArea in maadi */
  PropertyPlaces.SalePropertyZahraaMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=1 AND Property_for='Sale' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.SalePropertyMaadiSarayat = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=2 AND Property_for='Sale' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  PropertyPlaces.SalePropertyCornishMaadi = (type) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=3 AND Property_for='Sale' And  ? IN(type_ar_slug , type_en_slug) 
     group by image.cat
     order by inhome desc, xdat desc
     `,[type],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };



  PropertyPlaces.SalePropertyNewMaadi = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=4 AND Property_for='Sale' And Property_type=2 
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

  PropertyPlaces.SalePropertyMaadiDegla = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=5 AND Property_for='Sale' And Property_type=2 
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

  PropertyPlaces.SalePropertyOldMaadi = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          select * from property
    inner join maincat on maincat.mid=property.Area 
    inner join subcat on subcat.sid=property.Subarea  
    inner join image on image.cat = property.Id_property 
    inner join property_type on property_type.type_id=property.Property_type  
    inner join furniture on furniture.ffid=property.Furniture_status 
     where  Area=1 AND Subarea=6 AND Property_for='Sale' And Property_type=2 
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


  /* for sale Property subArea in newCairo */

  PropertyPlaces.SalePropertyChouifat = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=7 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyWestGolf= () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=8 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyFifthSettle= () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=9 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyMountainView = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=79 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyLakeView = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=78 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyArabella = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=90 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyFirstSettle = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=33 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyMirageCity = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=91 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyMivida = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=89 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyMadinty = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=92 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyKatamyaDunnes = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=81 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyKatamyaResd = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=82 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyKatamyaHills = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=83 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyVillageGate = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=84 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyTheVillage = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=85 AND Property_for='Sale' And Property_type=2
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
  
  PropertyPlaces.SalePropertyKatamyaPlaza = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=86 AND Property_for='Sale' And Property_type=2
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

  PropertyPlaces.SalePropertyStonePark = () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            select * from property
      inner join maincat on maincat.mid=property.Area 
      inner join subcat on subcat.sid=property.Subarea  
      inner join image on image.cat = property.Id_property 
      inner join property_type on property_type.type_id=property.Property_type  
      inner join furniture on furniture.ffid=property.Furniture_status 
      where  Area=4 AND Subarea=87 AND Property_for='Sale' And Property_type=2
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
  
  




module.exports = PropertyPlaces;
