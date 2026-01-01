const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB_URL = process.env.DB_URl;

    if (!DB_URL) {
      throw new Error("DB_URL not found in environment variables");
    }

    await mongoose.connect(DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};

module.exports = connectDB;
