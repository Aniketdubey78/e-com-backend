const mongoose =require("mongoose");

const userschema = new mongoose.Schema({
     name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  wishlist: [{
    type: mongoose.Types.ObjectId,
    ref: "Product"
  }],
  cart: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]

  // createdAt: timestamp
  // updatedAt: timestamp
}, {
  timestamps: true
})
const usermodel =mongoose.model("usermodel",userschema);
module.exports = usermodel;