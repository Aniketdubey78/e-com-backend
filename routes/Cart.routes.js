const Router = require("express").Router();
const controller = require("../controller/Cart.controller");
const { isAuthenticated } = require("../middleware/auth");

Router.get("/",isAuthenticated,controller.gatCart);

Router.post("/:id",isAuthenticated,controller.addOrRemoveInCart);

module.exports = Router;