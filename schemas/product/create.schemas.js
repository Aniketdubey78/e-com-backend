const joi = require("joi");

const createproductschema = joi.object({
    name: joi.string().required().trim(),
    description: joi.string().trim(),
    price:joi.number().required().min(0),
    imgUrl:joi.string().uri().required()

})
const createproductsArraySchema = joi.array().items(createproductschema);

module.exports = createproductsArraySchema;