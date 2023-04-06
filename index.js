const express = require("express");

const app = express();

const port = 1999;

app.get("/", (req, res) => {
  var a = 1;
  res.send("hello Fucking world");
});

app.listen(port, () => console.log("listen to localhost port"));
