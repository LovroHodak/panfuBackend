const mongoose = require("mongoose");

const songsSchema = mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    videoUrl: {
        type: String,
    }
})

const Songs = mongoose.model("songs", songsSchema)

module.exports = Songs;