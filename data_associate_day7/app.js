const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require("./models/user");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Bishnu",
    age: 30,
    email: "bishnu@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "hello sample post data",
    user: "697f5dfea916687e12971eae",
  });
  let user = await userModel.findOne({ _id: "697f5dfea916687e12971eae" });
  user.posts.push(post._id);
  await user.save();

  res.send({ post, user });
});

app.listen(3000);
