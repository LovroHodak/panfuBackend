const express = require("express");
const router = express.Router();

const Photo = require("../models/photos.model");

const getBucket = require("../utilities/bucket");
// node knjiznjica za dostop do fotke na disku
const fs = require("fs");

const { pipeline } = require("stream");
const { promisify } = require("util");
const mongoose = require("mongoose");

const promisifiedPipeline = promisify(pipeline);


// tuki shranjujem fotko v images.routes jo pa klicm/ berem
router.post("/addPhoto", async (req, res) => {
    try {
      if(req.body.password !== process.env.GESLO){
        res.status(401).json({message: 'wrong password'})
        return
      }
      
      const bucket = await getBucket();
      const newId = mongoose.Types.ObjectId();
      console.log(req.files);
      // vse za req.files.image. mi ustvari multipart (path, name, type)
      await promisifiedPipeline(
        // multipart mi sharni foto na disk
        // odpres pipo za branje iz diska(iz diska bo slo v mongota)
        // image je v FE Admin input name='image'
        fs.createReadStream(req.files.image.path),
        // zacne loadat v mongota
        // ko ga uploadas ga shrani pod tem imenom
        bucket.openUploadStream(req.files.image.name, {
          chunkSizeBytes: 1048576,
          metadata: {
            type: req.files.image.type,
          },
          id: newId,
        })
      );
  
      const { category } = req.body;
  
      const awaitedPhoto = await Photo.create({
        category,
        image: newId.toString(),
      });
      res.status(200).json(awaitedPhoto);
    } catch (e) {
      console.error(e);
    }
  });
  
  // tuki dobis podatke o slikah kje jih iskat(category, image(ki je vbistvu id))
  router.get("/photos", (req, res) => {
    Photo.find()
      .then((photo) => {
        res.status(200).json(photo);
        console.log(photo);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          message: "Server Error",
        });
      });
  });

  module.exports = router;