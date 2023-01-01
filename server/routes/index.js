const express = require('express');
const db = require("../controller")

const router = express.Router()

/* all properties and single properties */

router.get("/" ,async (req,res)=>{
        try {
            let results = await db.all()
            res.json(results)
        } catch (error) {
            console.log(error)
        }

})

router.get("/home" ,async (req,res)=>{
    try {
        let results = await db.allHome()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
router.get("/image/:id" ,async (req,res)=>{
    try {
        let results = await db.image(req.params.id)
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/prop/:slug" ,async (req,res)=>{
    try {
        let results = await db.singleProperty(req.params.slug)
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})


/*  all for sale in main places and subplaces */
router.get("/for-sale" ,async (req,res)=>{
    try {
        let results = await db.selectForSale()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})


/*  all for Rent in main places and subplaces */

router.get("/for-rent" ,async (req,res)=>{
    try {
        let results = await db.selectForRent()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
router.get("/for-rent/maadi" ,async (req,res)=>{
    try {
        let results = await db.selectForRentMaadi()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/for-rent/new-cairo" ,async (req,res)=>{
    try {
        let results = await db.selectForRentNewCairo()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/for-rent/katamya" ,async (req,res)=>{
    try {
        let results = await db.selectForRentKatamya()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
/*  all for Rent property type */

router.get("/for-rent/apartment" ,async (req,res)=>{
    try {
        let results = await db.selectForRentApartment()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})



/* select in these places */

router.get("/in-maadi" ,async (req,res)=>{
    try {
        let results = await db.selectInMaadi()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
router.get("/in-maadi-sarayat" ,async (req,res)=>{
    try {
        let results = await db.selectInMaadiSarayat()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
router.get("/in-maadi-degla" ,async (req,res)=>{
    try {
        let results = await db.selectInMaadiDegla()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/in-katamya" ,async (req,res)=>{
    try {
        let results = await db.selectInKatamya()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/in-new-cairo" ,async (req,res)=>{
    try {
        let results = await db.selectInNewCairo()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

/*  get all plogs and single blog */

router.get("/blogs" ,async (req,res)=>{
    try {
        let results = await db.getBlogsList()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/blogsen/:slug" ,async (req,res)=>{
    try {
        let results = await db.singleBlog(req.params.slug)
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})





module.exports = router