const Songs = require("./models/songs.model");
require("./config/db.config");
const getBucket = require("./utilities/bucket");
const fs = require("fs");

const { pipeline } = require("stream");
const { promisify } = require("util");

pipeline(readStream, writeStream, (err, data) => console.log(err, data))


const pipelineP = promisify(pipeline)
const data = await pipelineP(readStream, writeStream)
console.log(data)

getBucket().then(async (bucket) => {
  const image = await promisify(pipeline)(
    fs.createReadStream("./assets/thisMoment.jpg"),
    bucket.openUploadStream("ThisMoment.jpg", {
      chunkSizeBytes: 1048576,
      metadata: {
        type: "image/jpeg"
      },
    })
  );

  /* TO NISEM ZIHER (type mors spremenit ko bos PNG uploadal)
  metadata: {
        type: "image/jpeg",
        title: "This moment",
        videoUrl: "https://www.youtube.com/embed/SqIHGVdO2aQ",
      },
  */
  console.log(image);
  return;

  await Songs.insertMany([
    {
      title: "This moment",
      image: "",
      videoUrl: "https://www.youtube.com/embed/SqIHGVdO2aQ",
    },
    {
      title: "Mlada dama",
      image: "",
      videoUrl: "https://www.youtube.com/embed/gDR_qBWy2hA",
    },
  ])
    .then(() => {
      console.log("Songs added");
      process.exit();
    })
    .catch((err) => {
      console.log("Problems with adding Songs: ", err);
    });
});
