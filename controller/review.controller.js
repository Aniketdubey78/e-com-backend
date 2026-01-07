const Review = require("../models/review.model");
const api = require("../utils/api");

module.exports.createReviews = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user.id;
    const { comment, rating } = req.body;

    const review = await Review.create({
      comment,
      rating,
      productId,
      userId,
    });

    // Populate user name after creation
    const populatedReview = await Review.findById(review._id).populate(
      "userId",
      "name"
    );

    return api.success(
      res,
      populatedReview,
      "review created successfully",
      201
    );
  } catch (error) {
    return api.error(res, error.message, "unable to create reviews", 500);
  }
};

module.exports.updateReviews = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { comment, rating } = req.body;

    const review = await Review.findOne({ productId });

    if (!review) {
      return api.error(res, "not found", "review not found", 404);
    }

    if (rating) review.rating = rating;
    if (comment) review.comment = comment;

    await review.save();

    // Populate user name after update
    const populatedReview = await Review.findById(review._id).populate(
      "userId",
      "name"
    );

    return api.success(
      res,
      populatedReview,
      "review updated successfully",
      200
    );
  } catch (error) {
    return api.error(res, error.message, "unable to update review", 500);
  }
};

module.exports.DeleteReview = async (req, res) => {
  try {
    const productId = req.params.productId;

    const review = await Review.findOneAndDelete({ productId });

    if (!review) {
      return api.error(res, "not found", "review not found", 404);
    }

    return api.success(res, review, "review deleted successfully", 200);
  } catch (error) {
    return api.error(res, error.message, "unable to delete review", 500);
  }
};

module.exports.getAllReviews = async (req, res) => {
  try {
    const productId = req.params.productId;

    const reviews = await Review.find({ productId }).populate("userId", "name");

    return api.success(res, reviews, "reviews fetched", 200);
  } catch (error) {
    return api.error(res, error.message, "unable to fetch reviews", 500);
  }
};
