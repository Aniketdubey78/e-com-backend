const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.route");
const reviewRoutes = require("./review.routes");
const wishlistRoutes = require("./wishlist.route");
const users = require("./user.route");
const Cart = require("./Cart.routes");
const Search = require("./search.route")



router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/product", reviewRoutes);
router.use("/cart",Cart);
router.use("/wishlist", wishlistRoutes);
router.use("/user",users);
router.use("/search",Search)

module.exports = router;