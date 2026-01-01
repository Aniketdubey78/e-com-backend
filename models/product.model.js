const mongoose =require("mongoose");

const productschma =new mongoose.Schema({
     name: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  imgUrl: {
    type: String,
    trim: true
  },
  sellerId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
})
const productmodel =mongoose.model("productmodel",productschma);
module.exports =productmodel;