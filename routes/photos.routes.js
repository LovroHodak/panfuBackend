const express = require("express");
const router = express.Router();

const Photo = require("../models/photos.model");

const getBucket = require("../utilities/bucket");
const fs = require("fs");

const { pipeline } = require("stream");
const { promisify } = require("util");
const mongoose = require("mongoose");

const promisifiedPipeline = promisify(pipeline);

router.post("/addPhoto", async (req, res) => {
    try {
      const bucket = await getBucket();
      const newId = mongoose.Types.ObjectId();
      console.log(req.files);
      await promisifiedPipeline(
        fs.createReadStream(req.files.image.path),
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