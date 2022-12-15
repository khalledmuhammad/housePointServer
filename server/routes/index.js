const express = require('express');
const db = require("../db")

const router = express.Router()

router.get("/" ,async (req,res)=>{
        try {
            let results = await db.all()
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



router.get("/prop/:id" ,async (req,res)=>{
    try {
        let results = await db.singleProperty(req.params.id)
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})

router.get("/for-sale" ,async (req,res)=>{
    try {
        let results = await db.selectForSale()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
router.get("/for-rent" ,async (req,res)=>{
    try {
        let results = await db.selectForRent()
        res.json(results)
    } catch (error) {
        console.log(error)
    }

})
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


module.exports = router