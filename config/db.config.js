require("dotenv").config();
const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB panfu connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

  
