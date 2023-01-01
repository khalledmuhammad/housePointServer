const express = require("express");
const db = require("../controller/apartmentPlaces");


const router = express.Router();

/* rent apartment main Areas */
router.get("/rent/Maadi/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/rent/new-cairo/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyNewCairo(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  

  router.get("/rent/katamya/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyKatamya(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });

/* rent property in subarea maadi */


  router.get("/rent/zahraa-maadi/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyZahraaMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/maadi-sarayat/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMaadiSarayat(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/cornish-maadi/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyCornishMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/new-maadi/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyNewMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/maadi-degla/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMaadiDegla(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/rent/old-maadi/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyOldMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });

  /* subareas in new cairo */
  
  router.get("/rent/chouifat/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyChouifat(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/rent/west-golf/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyWestGolf(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/fifth-settle/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyFifthSettle(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/mountain-view/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMountainView(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/lake-view/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyLakeView(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/arabella/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyArabella(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/first-settle/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyFirstSettle(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/mirage/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMirageCity(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/mivida/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMivida(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/madinty/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyMadinty(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/katamya-dunnes/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyKatamyaDunnes(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/katamya-resd/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyKatamyaResd(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/katamya-hills/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyKatamyaHills(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/village-gate/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyVillageGate(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/the-village/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyTheVillage(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/rent/katamya-plaza/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyKatamyaPlaza(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/rent/stone-park/:type", async (req, res) => {
    try {
      let results = await db.rentPropertyStonePark(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });


module.exports = router;
