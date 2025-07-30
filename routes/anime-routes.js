const Anime = require ("../models/anime")
const router = require("express").Router()

router.get("/create",(req,res)=>{

    res.render("anime/create.ejs")
})

router.post("/create",async (req,res)=>{
    try{
    await Anime.create(req.body)
    res.redirect("/anime/create")

    }catch(error){
        console.log(error)
    }
})


module.exports = router