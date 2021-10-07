/*nuevo servidor alterno */

const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("./routes/index");

app.use(express.static(path.join(__dirname, "public")));

app.listener(5050, () => {
  console.log("server on port 5050");
});
/*router*/
