const {model, Schema, mongoose} = require("mongoose")

const animeSchema = new Schema({
    image:{
        type: String,
        required: true
    },
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
        required: true,
        min: 0,
        max: 10
    },
    review:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})


const Anime = model("Anime", animeSchema)
module.exports = Anime