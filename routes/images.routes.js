const express = require("express");
const router = express.Router();
const getBucket = require("../utilities/bucket");
const mongoose = require("mongoose")

const { pipeline } = require("stream");
const { promisify } = require("util");
const promisifiedPipeline = promisify(pipeline);
//const fs = require("fs");

router.get("/images/:id", async (req, res) => {
  const bucket = await getBucket();
  const [item] = await bucket.find({ _id: mongoose.Types.ObjectId(req.params.id) }).toArray();

  res.status(200);
  res.set("Content-Type", item.metadata.type);

  await promisifiedPipeline(
    bucket.openDownloadStream(item._id),
    res
  );


  //console.log(item);
});

module.exports = router;
