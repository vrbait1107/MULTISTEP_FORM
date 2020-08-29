const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const conn = mongoose.connect(
  "mongodb://http://localhost:27017/multistep-form",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const registerRouter = require("./routes/register");
app.use(registerRouter);

app.listen(PORT, function (req, res) {
  console.log("App listening on Port 5000");
});
