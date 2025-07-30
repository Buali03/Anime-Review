const {model, Schema} = require("mongoose")

const animeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
})


const Anime = model("Anime", animeSchema)
model.exports = Anime