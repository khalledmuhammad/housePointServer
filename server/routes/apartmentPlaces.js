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

  /* for sale properties Areas */
  router.get("/Sale/Maadi/:type", async (req, res) => {
    try {
      let results = await db.salePropertyMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/Sale/new-cairo/:type", async (req, res) => {
    try {
      let results = await db.salePropertyMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  

  router.get("/Sale/katamya/:type", async (req, res) => {
    try {
      let results = await db.salePropertyMaadi(req.params.type);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  });
  
/* Sale property in subarea maadi */


router.get("/Sale/zahraa-maadi/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyZahraaMaadi(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/maadi-sarayat/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyMaadiSarayat(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/cornish-maadi/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyCornishMaadi(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/new-maadi/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyNewMaadi(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/maadi-degla/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyMaadiDegla(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/Sale/old-maadi/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyOldMaadi(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

/* subareas in new cairo */

router.get("/Sale/chouifat/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyChouifat(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/Sale/west-golf/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyWestGolf(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/fifth-settle/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyFifthSettle(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/mountain-view/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyMountainView(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/lake-view/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyLakeView(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/arabella/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyArabella(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/first-settle/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyFirstSettle(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/mirage/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyMirageCity(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/mivida/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyMivida(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/madinty/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyMadinty(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/katamya-dunnes/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyKatamyaDunnes(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/katamya-resd/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyKatamyaResd(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/katamya-hills/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyKatamyaHills(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/village-gate/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyVillageGate(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/the-village/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyTheVillage(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/Sale/katamya-plaza/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyKatamyaPlaza(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/Sale/stone-park/:type", async (req, res) => {
  try {
    let results = await db.SalePropertyStonePark(req.params.type);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
