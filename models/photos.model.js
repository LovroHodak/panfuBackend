const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
    image: {
        type: String,
    },
    category: {
        type: String,
    }
})

const Photo = mongoose.model("photo", photoSchema)

module.exports = Photo;