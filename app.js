const express = require("express");
require("dotenv").config();
const app = express();
const port = 5000;

app.get("/health", (req, res) => {
  const greetings = process.env.GREETINGS || "OK";
  console.log(process.env.GREETINGS);
  res.status(200).send(greetings);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
