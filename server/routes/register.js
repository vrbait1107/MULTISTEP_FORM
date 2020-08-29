const express = require("express");
const router = express.Router();
const User = require("../Model/User");

router.post("/register", function (req, res) {
  const { firstName, lastName, email, city, occupation, bio } = req.body;

  const user = new User({
    firstName,
    lastName,
    email,
    city,
    occupation,
    bio,
  });

  user.save(function (err, data) {
    if (err) throw err;
    if (data) {
      res.status(200).json({ success: "You are successfully submitted Form" });
    }
  });
});

module.exports = router;
