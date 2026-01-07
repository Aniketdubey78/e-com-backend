const router =require("express").Router()
const controller = require("../controller/product.controller");



router.get("/" , controller.searchProduct);

module.exports = router;