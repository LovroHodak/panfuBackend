const express = require("express");
const router = express.Router();

const Social = require("../models/social.model");

const getBucket = require("../utilities/bucket");
const fs = require("fs");

const { pipeline } = require("stream");
const { promisify } = require("util");
const mongoose = require("mongoose");

const promisifiedPipeline = promisify(pipeline);

router.get("/social", (req, res) => {
  Social.find()
    .then((social) => {
      res.status(200).json(social);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
    });
});

router.post("/addSocial", async (req, res) => {
  try {
    const bucket = await getBucket();
    const newId = mongoose.Types.ObjectId();
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

    const { name, link } = req.body;

    const awaitedSocial = await Social.create({
      name,
      link,
      image: newId.toString(),
    });
    res.status(200).json(awaitedSocial);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
