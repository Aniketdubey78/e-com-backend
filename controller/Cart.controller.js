const User = require("../models/user.models");
const api = require("../utils/api");

module.exports.addOrRemoveInCart = async (req, res) => {
  try {
   
    
   const productId = req.body.productId || req.params.id;
   console.log(productId);
   
    const userId = req.user.id;
   console.log(userId);
   

    const user = await User.findById(userId);
    const index = user.cart.findIndex((id) => id == productId);
    
    if(index == -1) {
      user.cart.push(productId);
    } else {
      user.cart.splice(index, 1);
    }
    await user.save();


    

     
      
    api.success(res,user.cart);
  } catch (error) {
    api.error(res, error.message);
  }
}

module.exports.gatCart = async (req, res) => {
  try {
    console.log("i am here");
    
    const user = await User.findById(req.user.id).populate("cart");

    if (!user) return res.status(404).json({ message: "User not found" });


    console.log(user);
    
    
    api.success(res, user.cart);
  } catch (error) {
    api.error(res, error.message);
  }
}