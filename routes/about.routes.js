const express = require("express");
const router = express.Router();

const About = require("../models/about.model");

router.get("/about", (req, res) => {
  About.find()
    .then((about) => {
      res.status(200).json(about);
      //console.log(about);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
    });
});



router.post("/addAbout", (req, res) => {
  if(req.body.password !== process.env.GESLO){
    res.status(401).json({message: 'wrong password'})
    return
  }
  const { text } = req.body;
  //console.log(req.body);

  About.create({ text })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

module.exports = router;
