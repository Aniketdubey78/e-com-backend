const Router = require("express").Router();
const controller = require("../controller/product.controller");
const {isAuthenticated,isSeller}= require("../middleware/auth")
const  {validateRequest}  = require("../middleware/validaterequest");
const createproductschema = require("../schemas/product/create.schemas");
const reviewRoutes = require("./review.routes")


// method and route 
// (get, "/")


// (get, "/")
Router.get("/",controller.getALLproducts);

// (get, "/sldkjfksdjfl")
Router.get("/:id",controller.getproducts);

Router.post("/",
     validateRequest(createproductschema),
    isAuthenticated,
    isSeller,
    controller.createproducts
)

Router.put("/:id",
    isAuthenticated,
    isSeller,
    controller.updateproducts
)

Router.delete("/:id",
    isAuthenticated,
    isSeller,
    controller.deleteproducts
)

module.exports = Router;