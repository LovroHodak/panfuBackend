const mongodb = require("mongodb");
const mongoose = require("mongoose");

const dbPromise = require("../config/db.config");

module.exports = async function getBucket() {
  await dbPromise;
  const db = mongoose.connection.db;
  const bucket = new mongodb.GridFSBucket(db, { bucketName: "slikePanfu" });
  return bucket;
};

// namest JSON shranjuje file
// file upload v bazo, isces po npr id ali meta
