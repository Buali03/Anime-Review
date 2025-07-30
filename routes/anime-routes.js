const Anime = require ("../models/Anime")
const router = require("express").Router()

router.get("/create",(req,res)=>{

    res.render("anime/create.ejs")
})

router.post("/create",async (req,res)=>{
    try{
    await Anime.create(req.body)
    res.redirect("/anime")

    }catch(error){
        console.log(error)
    }
})

router.get("/",async(req,res)=>{
    try{
        const allAnime = await Anime.find()
        res.render("anime/all-anime.ejs",{allAnime: allAnime})
    }catch (error){
        console.log(error)
    }
})

module.exports = router