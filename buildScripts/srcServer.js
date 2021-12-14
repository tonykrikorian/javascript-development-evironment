import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  if (!err) open(`http://localhost:${port}`);
});

//Para exponer el website con localtunnel se ejecuta el siguiente comando
// lg --port 3000 --subdomain tony
