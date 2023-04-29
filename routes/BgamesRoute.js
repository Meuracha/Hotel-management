// const express = require("express");
// const router = express.Router();

// const Bgame = require('../models/Bgame')

// router.get("/getallBgames", async(req,res)=>{

//     try {
//         const bgames = await Bgame.find({})
//         res.send(bgames)
//     } catch (error) {
//         return res.status(400).json({ message : error });
//     }

// });

// // try use 
// router.get("/getboardgamebyid", async(req,res)=>{

//     const bgameid = req.body.Broomid

//     try {
//         const bgame = await Bgame.findOne({_id : bgameid})
//         res.send(bgame)
//     } catch (error) {
//         return res.status(400).json({ message : error });
//     }

// });

// module.exports = router;
