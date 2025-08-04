const Anime = require ("../models/anime")
const User = require ("../models/user")
const router = require("express").Router()

router.get("/user",async(req,res)=>{
    try{
        const allUser = await User.find()
        res.render("anime/user.ejs",{allUser: allUser})
    }catch (error){
        console.log(error)
    }}
)

router.get("/create",(req,res)=>{

    res.render("anime/create.ejs")
})

router.post("/create",async (req,res)=>{
    try{
        req.body.user = req.session.user._id
    await Anime.create(req.body)
    res.redirect("/anime")

    }catch(error){
        console.log(error)
    }
})

router.get("/",async(req,res)=>{
    try{
        const allAnime = await Anime.find({user:req.session.user._id}).populate("user")
                const foundUser = await User.findById(req.session.user._id)

        res.render("anime/all-anime.ejs",{allAnime: allAnime,foundUser})
    }catch (error){
        console.log(error)
    }
})


//Show page for specific Anime
router.get("/:animeID",async (req,res)=>{
    try{
    const foundAnime = await Anime.findById(req.params.animeID).populate("user")
    res.render("anime/anime-details.ejs",{foundAnime})
    }
    catch(error){
        console.log(error)
    }
})

//Delete anime functionality
router.delete("/:id", async (req,res)=>{
    console.log(req.params)
    try{
        const deletedAnime = await Anime.findByIdAndDelete(req.params.id)
        res.redirect("/anime")
    }
    catch(error){
        console.log(error)
    }
})

// Renders the update page
router.get("/:id/update",async(req,res)=>{
    try{
        const foundAnime = await Anime.findById(req.params.id)
        res.render("anime/anime-update.ejs",{foundAnime})
    }
    catch(error){
        console.log(error)
    }
})

//Update functionality
router.put("/:AnimeId",async(req,res)=>{
    try {
        const updatedAnime = await  Anime.findByIdAndUpdate(req.params.AnimeId, req.body)
        res.redirect(`/anime/${req.params.AnimeId}`)
    } catch (error) {
        console.log('error: ', error)
    }

})


router.get("/users/:userId",async(req,res)=>{
        const allAnime = await Anime.find({user:req.params.userId}).populate("user")
        const foundUser = await User.findById(req.params.userId)
        res.render("anime/all-anime.ejs",{allAnime: allAnime,foundUser})

})


module.exports = router