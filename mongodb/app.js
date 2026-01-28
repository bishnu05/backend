const express = require("express");
const usermodel = require("./usermodel");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, MongoDB!");
});

app.get("/create", async (req, res) => {
  let createduser = await usermodel.create({
    name: "Bishnu Gorai",
    username: "bishnu",
    email: "bishnu@gmail.com",
  });

  res.send(createduser);
  console.log("User created");
});

app.get("/read", async (req, res) => {
  //   let users = await usermodel.findOne({ username: "bishnu" });
  let users = await usermodel.find();
  res.send(users);
});

app.get("/update", async (req, res) => {
  let updateduser = await usermodel.findOneAndUpdate(
    { username: "johndoe" },
    { name: "Jane Doe" },
    { new: true },
  );
  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  let deleteduser = await usermodel.findOneAndDelete({ username: "johndoe" });
  res.send(deleteduser);
});

app.listen(3000);
