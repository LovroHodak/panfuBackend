/* const Social = require('./models/social.model')
require('./config/db.config')

Social.insertMany([
    {
        id: 1,
        link: "https://www.facebook.com/PANFU.trio/",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/800px-Facebook_icon_2013.svg.png',
        name: "fbIcon",
      },
      {
        id: 2,
        link: "https://www.youtube.com/channel/UCSfhUZMG9eh7iL6_qkMNPsQ",
        image: 'https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png',
        name: "ytIcon",
      },
      {
        id: 3,
        link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=peter.djokic@gmail.com&su=PANFUwebPage",
        image: 'https://www.clipartmax.com/png/middle/264-2640630_gmail-icon.png',
        name: "gmIcon",
      },
]).then(() => {
    console.log("Social added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding Social: ", err);
  }); */