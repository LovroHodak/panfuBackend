const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
    text: {
        type: String,
    }
})

const About = mongoose.model("about", aboutSchema)

module.exports = About;