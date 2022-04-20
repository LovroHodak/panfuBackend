const About = require("./models/about.model");
require("./config/db.config");

About.insertMany([
  {
    text: "The Rolling Stones are an English rock band formed in London in 1962. Active for almost six decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.",
  },
  {
    text: "Their first stable line-up comprised vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, bassist Bill Wyman, and drummer Charlie Watts. During their formative years Jones was the primary leader: he assembled the band, named it, and drove their sound and image. After Andrew Loog Oldham became the group's manager in 1963, he encouraged them to write their own songs. Jagger and Richards became the primary creative force behind the band, alienating Jones, who developed a drug addiction that interfered with his ability to contribute meaningfully. Rooted in blues and early rock and roll, the Rolling Stones started out playing covers and were at the forefront of the British Invasion in 1964, also being identified with the youthful and rebellious counterculture of the 1960s. They then found greater success with their own material as (I Can/t Get No) Satisfaction (1965), Get Off of My Cloud (1965) and Paint It Black (1966) became international No. 1 hits. Aftermath (1966) – their first entirely original album – is considered the most important of their formative records.",
  },
  {
    text: "In 1967, they had the double-sided hit Ruby Tuesday/Let's Spend the Night Together and experimented with psychedelic rock on Their Satanic Majesties Request. They returned to their roots with such hits as Jumpin' Jack Flash (1968) and Honky Tonk Women (1969), and albums such as Beggars Banquet (1968), featuring Sympathy for the Devil, and Let It Bleed (1969), featuring You Can't Always Get What You Want and Gimme Shelter. Let It Bleed was the first of five consecutive No. 1 albums in the UK.",
  },
])
  .then(() => {
    console.log("About added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding About: ", err);
  });
