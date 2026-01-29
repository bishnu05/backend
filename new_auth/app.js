const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "bishnu@gmail.com" }, "secretKey");
  res.cookie("token", token);
  console.log("token", token);
  res.send("Done");
});

app.get("/read", (req, res) => {
  let token = req.cookies.token;
  console.log("token from cookie:", token);
  let data = jwt.verify(token, "secretKey");
  console.log("data:", data);
});


// app.get("/", (req, res) => {
//   // res.cookie("name", "Bishnu");
//   // res.send("Done!");
//   bcrypt.genSalt(10, function (err, salt) {
//     console.log(salt);
//     bcrypt.hash("myPlaintextPassword", salt, function (err, hash) {
//       // Store hash in your password DB.
//       console.log("hash", hash);
//     });
//   });
// });

// app.get("/", async (req, res) => {
//   bcrypt.compare("myPlaintextPassword", "$2b$10$yHaCqdgqmr.NMXstBe0ya.RofRJSJl5BSmn.ahJmBgd18uvkI8gnO", function(err, result) {
//     // result == true
//     console.log(result);
// });
// });

// app.get("/read", (req, res) => {
// // console.log(req.cookies);
//   res.send(`Cookie Value:`);
// });

app.listen(3000);
