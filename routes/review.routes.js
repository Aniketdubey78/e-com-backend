const controller = require("../controller/review.controller");
const { isAuthenticated } = require("../middleware/auth");
const router = require("express").Router();

router.post("/products/:productId", isAuthenticated, controller.createReviews);
router.put("/products/:productId", isAuthenticated, controller.updateReviews);
router.delete("/products/:productId", isAuthenticated, controller.DeleteReview);

router.get("/", controller.getAllReviews);

module.exports = router;