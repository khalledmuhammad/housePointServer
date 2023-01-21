const express = require("express");
const db = require("../controller");
const pool = require("../db/dbConn");
const jwt = require("jsonwebtoken");

const router = express.Router();

/* all properties and single properties */

router.get("/", async (req, res) => {

  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/AllProp", async (req, res) => {
  try {
    let results = await db.allProp();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});


router.get("/home", async (req, res) => {
  try {
    let results = await db.allHome();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-country", async (req, res) => {
  try {
    let results = await db.getCountry();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});


router.get("/image/:id", async (req, res) => {
  try {
    let results = await db.image(req.params.id);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/prop/:slug", async (req, res) => {
  try {
    let results = await db.singleProperty(req.params.slug);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getProp/:id", async (req, res) => {
  try {
    let results = await db.singlePropertybyId(req.params.id);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

/*  all for sale in main places and subplaces */
router.get("/for-sale", async (req, res) => {
  try {
    let results = await db.selectForSale();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

/*  all for Rent in main places and subplaces */

router.get("/for-rent", async (req, res) => {
  try {
    let results = await db.selectForRent();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/for-rent/maadi", async (req, res) => {
  try {
    let results = await db.selectForRentMaadi();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/for-rent/new-cairo", async (req, res) => {
  try {
    let results = await db.selectForRentNewCairo();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/for-rent/katamya", async (req, res) => {
  try {
    let results = await db.selectForRentKatamya();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
/*  all for Rent property type */

router.get("/for-rent/apartment", async (req, res) => {
  try {
    let results = await db.selectForRentApartment();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

/* select in these places */

router.get("/in-maadi", async (req, res) => {
  try {
    let results = await db.selectInMaadi();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/in-maadi-sarayat", async (req, res) => {
  try {
    let results = await db.selectInMaadiSarayat();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/in-maadi-degla", async (req, res) => {
  try {
    let results = await db.selectInMaadiDegla();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/in-katamya", async (req, res) => {
  try {
    let results = await db.selectInKatamya();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/in-new-cairo", async (req, res) => {
  try {
    let results = await db.selectInNewCairo();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

/*  get all plogs and single blog */

router.get("/blogs", async (req, res) => {
  try {
    let results = await db.getBlogsList();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/blogsen/:slug", async (req, res) => {
  try {
    let results = await db.singleBlog(req.params.slug);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

/* post request */

router.post("/signin", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  pool.query(
    "SELECT * FROM users WHERE E_Mail_1 = ? AND Password = ?",
    [email, password],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res.send({
          code: 400,
          error: "Error occured",
        });
      } else {
        if (results.length > 0) {
          const token = jwt.sign({ email: res.email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });

          res.send({
            code: 200,
            success: "Successfully signed in",
            token,
          });
        } else {
          res.send({
            code: 204,
            error: "Email or password incorrect",
          });
        }
      }
    }
  );
});

router.post("/add-Property", (req, res) => {
  // Get the data from the request body
  const title = req.body.title;
  const titlear = req.body.titlear;
  const price = req.body.price;
  const price_ex = req.body.price_ex;
  const area = req.body.area;
  const subarea = req.body.subarea;
  const property_type = req.body.property_type;
  const property_for = req.body.property_for;
  const surface_area = req.body.surface_area;
  const property_status = req.body.property_status;
  const no_of_bedrooms = req.body.no_of_bedrooms;
  const no_of_bathrooms = req.body.no_of_bathrooms;
  const furniture_status = req.body.furniture_status;
  const owner_name = req.body.owner_name;
  const owner_phone = req.body.owner_phone;
  const owner_address = req.body.owner_address;

  const slug_ar = titlear.replace(/ /g, "-");
  const slug_en = title.replace(/ /g, "-");

  // The query to insert data into the table
  const query = `INSERT INTO property (Title,titlear, Price, Price_ex, Area, Subarea, Property_type, Property_for, Surface_area, Property_status, No_of_bedrooms, No_of_bathrooms, Furniture_status, owner_name, owner_phone, owner_address, slug_ar, slug_en)
  VALUES (  '${title}', '${titlear}', ${price}, ${price_ex}, '${area}', '${subarea}', '${property_type}', '${property_for}', ${surface_area}, '${property_status}', ${no_of_bedrooms}, ${no_of_bathrooms}, '${furniture_status}', '${owner_name}', '${owner_phone}', '${owner_address}', '${slug_ar}', '${slug_en}')`;



  // Execute the query to insert the data
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Successfully inserted data into Property`);
      res.send({ message: `Successfully inserted data into Property` });
    }
  });
});

router.put("/edit-property/:id", (req, res) => {
  // Get the property data from the request body
  const { Title, titlear, Price, Price_ex, Area, Subarea, Property_type, Property_for, Surface_area, Property_status, No_of_bedrooms, No_of_bathrooms, Furniture_status, owner_name, owner_phone, owner_address } = req.body;

  // The query to update the property in the table
  const query = `UPDATE property 
  SET Title=?, titlear=?, Price=?, Price_ex=?, Area=?, Subarea=?, Property_type=?, Property_for=?, Surface_area=?, Property_status=?, No_of_bedrooms=?, No_of_bathrooms=?, Furniture_status=?, owner_name=?, owner_phone=?, owner_address=?
  WHERE id_property = ?`;

  // Execute the query to update the property
  pool.query(query, [Title, titlear, Price, Price_ex, Area, Subarea, Property_type, Property_for, Surface_area, Property_status, No_of_bedrooms, No_of_bathrooms, Furniture_status, owner_name, owner_phone, owner_address, req.params.id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error });
    } else {
      console.log(`Successfully edited property with id_property: ${req.params.id}`);
      res.send({ message: `Successfully edited property with id_property: ${req.params.id}` });
    }
  });
});

router.delete("/delete-property/:id", (req, res) => {
  // Get the id_property from the request parameters
  const id_property = req.params.id;

  // The query to delete the property
  const query = `DELETE FROM property WHERE id_property = ${id_property}`;

  // Execute the query to delete the property
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error });
    } else {
      console.log(`Successfully deleted property with id_property: ${id_property}`);
      res.send({ message: `Successfully deleted property with id_property: ${id_property}` });
    }
  });
});

router.get("/properties", (req, res) => {
  let query = `   select * from property
  inner join maincat on maincat.mid=property.Area
   inner join subcat on subcat.sid=property.Subarea  
   inner join property_type on property_type.type_id=property.Property_type  
   inner join furniture on furniture.ffid=property.Furniture_status 
   inner join image on image.cat = property.Id_property `;

  // Add filtering based on query parameters
  let where = []
  if (req.query.name || req.query.namear) {
    where.push(`(name LIKE '%${req.query.name}%' or namear LIKE '%${req.query.namear}%'  )  `)
  }
  if (req.query.type_en_slug || req.query.type_ar_slug ) {
    where.push(`(type_en_slug LIKE '%${req.query.type_en_slug}%'  or type_ar_slug LIKE '%${req.query.type_ar_slug}%' ) `)
  }

  if (req.query.property_for) {
    where.push(`(Property_for = '${req.query.property_for}')`)
  }

  if (req.query.property_for && req.query.name || req.query.namear ) {
    where.push(`(Property_for = '${req.query.property_for}'  and name LIKE '%${req.query.name}%' or namear LIKE '%${req.query.namear}%') `)
  }

  if (req.query.property_for && req.query.type_en_slug || req.query.type_ar_slug  ) {
    where.push(`(Property_for = '${req.query.property_for}'  and type_en_slug LIKE '%${req.query.type_en_slug}%'  or type_ar_slug LIKE '%${req.query.type_ar_slug}%')  `)
  }

  if(where.length > 0){
    query += ` WHERE ${where.join(' AND ')}`;
  }
  query += " GROUP BY image.cat ORDER BY inhome DESC, xdat DESC LIMIT 2500";

  // Execute the query and return the result
  pool.query(query, (error, results) => {
    if (error) {
      console.log(query)
      res.status(500).send({ error });
    } else {
      res.send(results);
    }
  });
});


module.exports = router;
