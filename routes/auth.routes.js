const Router  = require("express").Router();
const controller = require("../controller/auth.controller");

Router.post("/login", controller.login);

Router.post("/register", controller.register);

module.exports = Router;