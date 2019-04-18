const express = require("express");
const helmet = require("helmet");

const app = express();

// add some security-related headers to the response
app.use(helmet());
app.use(express.json());

app.get("*", (req, res) => {
  // res.set("Content-Type", "text/html");
  console.log(req);
  res.send(req);
});

module.exports = app;
