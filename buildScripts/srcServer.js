const express = require("express");
const path = require("path");
const open = require("open");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if (err) console.log(err);
  if (!err) open(`http://localhost:${port}`);
});

//Para exponer el website con localtunnel se ejecuta el siguiente comando
// lg --port 3000 --subdomain tony
