const joi = require("joi");

const createproductschema = joi.object({
    name: joi.string().required().trim(),
    description: joi.string().trim(),
    price:joi.number().required().min(0),
    imgUrl:joi.string().uri().required()

})


module.exports = createproductschema;