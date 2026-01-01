const express =require("express");
const user = require("../models/user.models")
const api = require("../utils/api");

module.exports.getALLusers = async (req,res)=>{
    try{
    const users = await user.find();
    api.success(res,users);
    }catch(error){
        api.error(res,error.message,"unable to fetch user");
    }
}
module.exports.getuser = async(req,res)=>{
    try{
    const userId = req.params.id
    const useri = await user.findById(userId);
    api.success(res,useri);
    }catch(error){
        api.error(res,error.message,"unable to get user");
    }
}
module.exports.createuser = async(req,res)=>{
    try{
    const useri = await user.create(req.body);
    api.success(res,useri);
    }catch(error){
        api.error(res,error.message,"unable to create user");
    }
}
module.exports.updateuser = async(req,res)=>{
    try{
    const useri = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    api.success(res,useri);
    }catch(error){
        api.error(res,error.message,"error in updating the user");
    }
}
module.exports.deleteuser = async(req,res)=>{
    try{
    const useri = await user.findByIdAndDelete(req.params.id);
    api.success(res,useri);
    }catch(error){
        api.error(res,error.message,"error in deleting the user");
    }
}