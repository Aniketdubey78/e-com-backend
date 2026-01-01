const router = require("express").Router();
const controller = require("../controller/wishlist.controller");
const { isAuthenticated } = require("../middleware/auth");

router.get("/", isAuthenticated, controller.getWishlist);
router.post("/", isAuthenticated, controller.addOrRemove);

module.exports = router;