const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");
require("dotenv").config();

require("./src/config/DBConnection");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
