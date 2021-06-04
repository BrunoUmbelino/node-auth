const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("server running");
});
