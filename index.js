require("dotenv").config();

const express = require("express");
const app = express();

var multipart = require('connect-multiparty');

const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Use body parser. To be able parse post request information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client
app.use(multipart())

app.use((req, res, next) => {
  //console.log(req.path, req.method)
  next()
})

/* const socialRoutes = require('./routes/social.routes')
app.use('/api', socialRoutes) */

const aboutRoutes = require('./routes/about.routes')
app.use('/api', aboutRoutes)

const imagesRoutes = require('./routes/images.routes')
app.use('/api', imagesRoutes)

const songsRoutes = require('./routes/songs.routes')
app.use('/api', songsRoutes)

const photosRoutes = require('./routes/photos.routes');
//const req = require("express/lib/request");
app.use('/api', photosRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}, dirname ${__dirname}`)
);
