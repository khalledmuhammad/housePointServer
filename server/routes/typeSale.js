const express = require("express");
const typeSale = require("../controller/typeSale");

const router = express.Router();


router.get("/Apartment", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleApartment();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/duplex", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleduplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ground-floor-duplex", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleGrondFloorDuplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ground-floor", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleGroundFloor();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/penthouse", async (req, res) => {
  try {
    let results = await typeSale.selectForSalePentHouse();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/villa", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleVilla();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/roof", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleRoof();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/studio", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleStudio();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/pentHouse-duplex", async (req, res) => {
  try {
    let results = await typeSale.selectForSalePentHouseDuplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/pentHouse-triplex", async (req, res) => {
  try {
    let results = await typeSale.selectForSalePentHouseTriplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ground-floor-triplex", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleGroundFloorTriplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/Adminstration-building", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleAdminstrationBuilding();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/twin-house", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleTwinHouse();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/building", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleBuilding();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/chalet", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleChalet();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/town-house", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleTownHouse();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/land", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleLand();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/flat", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleFlat();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/commercial-store", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleCommercialStore();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/office", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleOffice();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ofice-admin", async (req, res) => {
  try {
    let results = await typeSale.selectForSaleOfficeAdmin();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
