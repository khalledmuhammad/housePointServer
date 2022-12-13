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



module.exports = router