const User = require("../models/user.models");
const api = require("../utils/api");

module.exports.addOrRemoveInCart = async (req, res) => {
  try {
   const productId = req.body.productId || req.params.id;
    const userId = req.user.id;
    console.log(userId)

    const user = await User.findById(userId);
    const index = user.cart.findIndex((id) => id == productId);
    if(index == -1) {
      user.cart.push(productId);
    } else {
      user.cart.splice(index, 1);
    }
    await user.save();
    api.success(res, null);
  } catch (error) {
    api.error(res, error.message);
  }
}

module.exports.gatCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("wishlist");
    api.success(res, user.cart);
  } catch (error) {
    api.error(res, error.message);
  }
}