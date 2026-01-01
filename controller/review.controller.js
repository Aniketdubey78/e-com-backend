const  review = require("../models/review.model")
const api =require("../utils/api");

module.exports.createReviews = async(req,res) =>{
    try {
        const productId =req.params.productId
        const userId =req.user.Id

        const {comment , rating} = req.body

        const review = await review.create({comment ,rating,productId,userId});
        return api.success(res,review,"review created successfully",201);
    } catch (error) {
        return api.error(res,error.message,"unable to create reviews",500);
    }
}

module.exports.updateReviews = async (req,res) =>{
    try {
        const productId = req.params.productId
        

        const {comment,rating} =req.body;
        const reviews  = await review.findOne(productId);

        if(!reviews){
            return api.error(res,"not found","review not found",404);
        }

        if(rating) reviews.rating =rating;
        if(comment) reviews.comment =comment;

        return api.success(res,reviews,"review update succesfully",200);
       
    } catch (error) {
        return api.error(res,error.message,"unable to update review" ,500);
    }
}


module.exports.DeleteReview = async (req,res) =>{
    try {
        const productId = req.params.productId
        
        const reviews  = await review.findOneAndDelete(productId);

        if(!reviews){
            return api.error(res,"not found","review not found",404);
        }

        return api.success(res,reviews,"review deleted successfully",200);
       
    } catch (error) {
        return api.error(res,error.message,"unable to delete review" ,500);
    }
}
module.exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await review.find();
    return api.success(res, reviews, "reviews fetched", 200);
  } catch (error) {
    return api.error(res, error.message, "unable to fetch reviews", 500);
  }
};
