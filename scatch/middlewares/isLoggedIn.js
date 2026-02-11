const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    req.flash("error", "You need to login first!");
    return res.redirect("/");
  }
  try {
    let decoded = jwt.verify(token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "Invalid token! Please login again.");
    return res.redirect("/");
  }
};
