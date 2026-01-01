const joi =require("joi");
const api =require("../utils/api")


module.exports.validateRequest = (schema) =>{
    return(req,res,next)=>{
        const { error,value} =schema.validate(req.body,{abortEarly:false})
       
        if(error){
            const errormsg =error.details.map(err  => err.message)
            return api.error(res,errormsg,"validation error",400)
        }

        req.body =value;
        next();
    }
}