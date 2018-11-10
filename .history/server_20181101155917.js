var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/media", function(req, res) {
  console.log("data", req);

  res.send("ok");
});
// set up server
app.listen(8081, () => {
  console.log("server is running 8081");
});
