const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.route");
const reviewRoutes = require("./review.routes");
const wishlistRoutes = require("./wishlist.route");
const users = require("./user.route");
const Cart = require("./Cart.routes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/products/:productId/reviews", reviewRoutes);
router.use("/cart",Cart);
router.use("/wishlist", wishlistRoutes);
router.use("/user",users);

module.exports = router;