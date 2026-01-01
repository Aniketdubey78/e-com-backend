const Router = require("express").Router();
const controller = require("../controller/user.controller");

Router.get("/", controller.getALLusers);
Router.get("/:id", controller.getuser);
Router.post("/", controller.createuser);
Router.put("/:id", controller.updateuser);
Router.delete("/:id", controller.deleteuser);

module.exports = Router;
