const mongodb = require("mongodb");
const mongoose = require("mongoose");

const dbPromise = require("../config/db.config");

module.exports = async function getBucket() {
  await dbPromise;
  const db = mongoose.connection.db;
  const bucket = new mongodb.GridFSBucket(db, { bucketName: "slikePanfu" });
  return bucket;
};
