const controller = require("../controller/review.controller");
const { isAuthenticated } = require("../middleware/auth");
const router = require("express").Router();

router.get("/:productId/reviews", isAuthenticated,controller.getAllReviews)
router.post("/:productId/reviews", isAuthenticated, controller.createReviews);
router.put("/:productId/reviews", isAuthenticated, controller.updateReviews);
router.delete("/:productId/reviews", isAuthenticated, controller.DeleteReview);

router.get("/", controller.getAllReviews);

module.exports = router;