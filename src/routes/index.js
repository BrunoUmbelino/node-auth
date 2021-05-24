const express = require("express");
const LoginController = require("../controller/LoginController");

const routes = express.Router();

routes.get("/", (request, response) => {
  response.send("ok");
});

routes.get("/login", (request, response) => {
  response.send("login");
});
routes.post("/login", LoginController.login);

module.exports = routes;
