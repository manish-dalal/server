var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var cors = require("cors");

const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/media", function(req, res) {
  console.log("data", req);

  res.send("ok");
});
// set up server
app.listen(PORT, () => {
  console.log("server is running 8080");
});
