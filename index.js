// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
  console.log('"🚀 ~ file: index.js:25 ~ greeting"');
});

app.get("/api/timestamp", function (req, res) {
  var now = new Date();
  res.json({ unix: now.getTime(), utc: now.toUTCString() });
});

app.get("/api/timestamp/:date", function (req, res) {
  console.log("🚀 ~ file: index.js:29 ~ req", req.params);
  const dateString = req.params.date;
  console.log("🚀 ~ file: index.js:31 ~ dateString", dateString);
  const checkedDate = new Date(dateString);
  console.log("🚀 ~ file: index.js:33 ~ checkedDate", checkedDate);
  if (checkedDate == "Invalid Date") {
    res.json({ error: "Invalid date" });
  } else {
    res.json({ unix: checkedDate.getTime(), utc: checkedDate.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
