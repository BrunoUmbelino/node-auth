const express = require("express");
const LoginController = require("../controller/LoginController");
const UserController = require("../controller/UserController");

const routes = express.Router();

routes.get("/", (request, response) => response.send("server ok"));

routes.post("/login", LoginController.login);

routes.post("/register", UserController.register);

module.exports = routes;
