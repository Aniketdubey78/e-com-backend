const joi = require("joi");
const api = require("../utils/api");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

module.exports.register = async (req, res) => {
    try {
        const { name, role, email, password } = req.body;
    const existinguser = await User.findOne({ email: email })
        if (existinguser) {
            return api.error(res, "Error", "user already exist", 400);
        }

    const hash = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const newUser = await User.create({ name, role, email, password: hash });

    const token = jwt.sign({
      id: newUser._id,
      role: newUser.role

    }, process.env.JWT_SECRET);

    const data = {
      token: token,
      user: {
        id: newUser._id,
        role: newUser.role,
        email: newUser.email
      }
    };
    api.success(res, data, "user registered successfully", 201);

    }
    catch(error){
        api.error(res, error.message, "error in registering user", 500);
    }
}
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if(!user){
      return api.error(res, "Error", "Invalid credentials", 400);
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) return api.error(res, "Error", "Invalid credentials", 400);

    // token
    const token = jwt.sign({
      id: user._id,
      role: user.role
    }, process.env.JWT_SECRET);

    const data = {
      token: token,
      user: {
        id: user._id,
        role: user.role,
        email: user.email
      }
    }

    api.success(res, data, "User logged in successfully")
  } catch (error) {
    api.error(res, error.message, "Something went wrong in validating user");
  }
}