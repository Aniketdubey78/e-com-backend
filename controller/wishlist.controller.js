const User = require("../models/user.models");
const api = require("../utils/api");

module.exports.addOrRemove = async (req, res) => {
  try {
    const { productId } = req.body;
   
    const userId = req.user.id;
     
    const user = await User.findById(userId);
    
    const index = user.wishlist.findIndex((id) => id == productId);
   
    if(index == -1) {
      user.wishlist.push(productId);
    } else {
      user.wishlist.splice(index, 1);
    }
    await user.save();
    api.success(res, user.wishlist);
  } catch (error) {
    api.error(res, error.message);
  }
}

module.exports.getWishlist = async (req, res) => {
  try {
     
    const user = await User.findById(req.user.id).populate("wishlist");
   
    if (!user) return res.status(404).json({ message: "User not found" });

     
    api.success(res, user.wishlist);
   
  } catch (error) {
    api.error(res, error.message);
  }
}