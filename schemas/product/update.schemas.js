const joi = require("joi");


const updateProductSchema = joi.object({
  name: joi.string().trim(),
  description: joi.string().trim(),
  price: joi.number().min(0),
  imageurl: joi.string().trim()
}).min(1);

module.exports = updateProductSchema;