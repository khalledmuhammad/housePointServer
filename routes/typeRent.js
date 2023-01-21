const express = require("express");
const typeRent = require("../controller/typeRent");

const router = express.Router();



router.get("/:type" ,async (req,res)=>{
  try {
      let results = await typeRent.selectForRentProperty(req.params.type)
      res.json(results)
  } catch (error) {
      console.log(error)
  }

})

router.get("/Apartment", async (req, res) => {
  try {
    let results = await typeRent.selectForRentApartment();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/duplex", async (req, res) => {
  try {
    let results = await typeRent.selectForRentduplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ground-floor-duplex", async (req, res) => {
  try {
    let results = await typeRent.selectForRentGrondFloorDuplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ground-floor", async (req, res) => {
  try {
    let results = await typeRent.selectForRentGroundFloor();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/penthouse", async (req, res) => {
  try {
    let results = await typeRent.selectForRentPentHouse();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/villa", async (req, res) => {
  try {
    let results = await typeRent.selectForRentVilla();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/roof", async (req, res) => {
  try {
    let results = await typeRent.selectForRentRoof();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/studio", async (req, res) => {
  try {
    let results = await typeRent.selectForRentStudio();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/pentHouse-duplex", async (req, res) => {
  try {
    let results = await typeRent.selectForRentPentHouseDuplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/pentHouse-triplex", async (req, res) => {
  try {
    let results = await typeRent.selectForRentPentHouseTriplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ground-floor-triplex", async (req, res) => {
  try {
    let results = await typeRent.selectForRentGroundFloorTriplex();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/Adminstration-building", async (req, res) => {
  try {
    let results = await typeRent.selectForRentAdminstrationBuilding();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/twin-house", async (req, res) => {
  try {
    let results = await typeRent.selectForRentTwinHouse();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/building", async (req, res) => {
  try {
    let results = await typeRent.selectForRentBuilding();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/chalet", async (req, res) => {
  try {
    let results = await typeRent.selectForRentChalet();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/town-house", async (req, res) => {
  try {
    let results = await typeRent.selectForRentTownHouse();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/land", async (req, res) => {
  try {
    let results = await typeRent.selectForRentLand();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/flat", async (req, res) => {
  try {
    let results = await typeRent.selectForRentFlat();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/commercial-store", async (req, res) => {
  try {
    let results = await typeRent.selectForRentCommercialStore();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/office", async (req, res) => {
  try {
    let results = await typeRent.selectForRentOffice();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/ofice-admin", async (req, res) => {
  try {
    let results = await typeRent.selectForRentOfficeAdmin();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
