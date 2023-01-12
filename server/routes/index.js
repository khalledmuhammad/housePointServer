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

  // The query to insert data into the table
  const query = `INSERT INTO property (Title,titlear , Price, Price_ex ,
     Area, Subarea, Property_type, Property_for, Surface_area, Property_status, No_of_bedrooms, No_of_bathrooms, Furniture_status, owner_name, owner_phone, owner_address)
   VALUES (  '${title}', '${titlear}', ${price}, ${price_ex}, '${area}', '${subarea}', '${property_type}',
    '${property_for}', ${surface_area}, '${property_status}', ${no_of_bedrooms}, ${no_of_bathrooms}, '${furniture_status}', '${owner_name}', '${owner_phone}', '${owner_address}')`;

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

router.put("/update-property/:id", (req, res) => {
  const query = `UPDATE property SET Title = '${req.body.title}', Title_ar = '${req.body.titlear}', 
  Price = ${req.body.price}, Price_ex = ${req.body.price_ex}, 
  Area = '${req.body.area}', Subarea = '${req.body.subarea}', Property_type = '${req.body.property_type}',
   Property_for = '${req.body.property_for}', Surface_area = ${req.body.surface_area},
    Property_status = '${req.body.property_status}', Floor_no = ${req.body.floor_no}, 
    No_of_bedrooms = ${req.body.no_of_bedrooms}, No_of_bathrooms = ${req.body.no_of_bathrooms}, 
    Furniture_status = '${req.body.furniture_status}', owner_name = '${req.body.owner_name}',
     owner_phone = '${req.body.owner_phone}', owner_address = '${req.body.owner_address}'
      WHERE Id_property = ${req.params.id}`;
  // Execute the query to insert the data
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Successfully Updaye `);
      res.send({ message: `Successfully Updated` });
    }
  });
});

module.exports = router;
