const express = require("express");
const LoginController = require("../controller/LoginController");

const routes = express.Router();

routes.get("/", (request, response) => {
  response.send("server ok");
});

routes.post("/login", LoginController.login);

module.exports = routes;
