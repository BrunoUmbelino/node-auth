const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.DB_CONNECTION_STRING;

mongoose.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connected")
);
