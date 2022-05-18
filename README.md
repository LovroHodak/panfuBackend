BE is writen in Node where I first set up an Express server. Than i use library connect-multiparty that works with different data types. With Bucket I connect to mongoDB.

1. INDEX.js
-MULTIPART !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






1. npm init
2. git init
3. npm i express mongoose dotenv nodemon cors body-parser
4. npm i --save-dev nodemon concurrently






ASK


1. /config -
a) kako dela ta module.exports, ker ga ne eksportam kot variablo? to se nanasa potem na inport v indexu, kje se zgodi?

2. /index -
a) require("dotenv").config(); - kako to dela?
b) app.use() - celi kako dela?

3. /songs.routes -
a) id: newId, - kje se ustvari ta newId in kako je povezan z bucketom? a to nima scopa(ker se uporabi spodaj )
b) const awaitedSong = await Songs.create({
      title,
      videoUrl,
      image: newId.toString(),
    });
    - kako sva ta image ekstrektala? - req.files.image?

