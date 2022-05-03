const express = require("express");
const router = express.Router();

const fs = require("fs");

const { pipeline } = require("stream");
const { promisify } = require("util");
const promisifiedPipeline = promisify(pipeline);

const mongoose = require("mongoose");


const Songs = require("../models/songs.model");

const getBucket = require("../utilities/bucket");



router.get("/songs", async (req, res) => {
  try{
    const songs = await Songs.find()
    res.status(200).json(songs);
  } catch (e) {
    console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
  }
  /* Songs.find()
    .then((songs) => {
      res.status(200).json(songs);
      //console.log(songs);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
    }); */
});

router.post("/addSong", async (req, res) => {
  try {
    if(req.body.password !== process.env.GESLO){
      res.status(401).json({message: 'wrong password'})
      return
    }
    
    const bucket = await getBucket();
    const newId = mongoose.Types.ObjectId();
    console.log(req.files);
    const { image } = req.files;
    console.log(image)
    console.log(image.path)
    await promisifiedPipeline(
      fs.createReadStream(image.path),
      bucket.openUploadStream(image.name, {
        chunkSizeBytes: 1048576,
        metadata: {
          type: image.type,
        },
        id: newId,
      })
    );

    /* const title = req.body.title
    const videoUrl = req.body.videoUrl */
    console.log(req.body);
    const { title, videoUrl } = req.body;


    const awaitedSong = await Songs.create({
      title,
      videoUrl,
      image: newId.toString(),
    });
    res.status(200).json(awaitedSong);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
