const express = require("express");
const helmet = require("helmet");

const app = express();

// add some security-related headers to the response
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("*", (req, res) => {
  // res.set("Content-Type", "text/html");

  res.send(req.body);
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  console.log(req.body.Body.stkCallback.CallbackMetadata);
});

module.exports = app;
