const express = require("express");
const helmet = require("helmet");

const app = express();

// add some security-related headers to the response
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send(`
        <h1>Safaricom Daraja API Endpoint</h1>
    `);
});

app.get("*", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send(`
        <h1>Safaricom Daraja API Endpoint</h1>
    `);
});

module.exports = app;
