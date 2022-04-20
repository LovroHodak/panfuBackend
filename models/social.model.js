const mongoose = require("mongoose");

const socialSchema = mongoose.Schema({
    link: {
        type: String,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
    }
})

const Social = mongoose.model("social", socialSchema)

module.exports = Social;