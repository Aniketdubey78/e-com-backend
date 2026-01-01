const express = require("express");
const Product = require("../models/product.model");
const api = require("../utils/api");

module.exports.getALLproducts = async(req,res)=>{
    try{
    const products = await Product.find();
    api.success(res,products);
    }catch(error){
        api.error(res,error.message,"unable to fetch product");
    }
}
module.exports.getproducts = async(req,res)=>{
    try{
    const products = await Product.findById(req.params.id);
    api.success(res,products);
    }catch(error){
        api.error(res,error.message,"unable to get product");
    }
}
module.exports.createproducts = async(req,res)=>{
    try{
        console.log(req.body)
    const products = await Product.create(req.body);
    api.success(res,products);
    }catch(error){
        api.error(res,error.message,"unable to create product");
    }
}
module.exports.updateproducts = async(req,res)=>{
    try{
    const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    api.success(res,products);
    }catch(error){
        api.error(res,error.message,"error in updating the product");
    }
}
module.exports.deleteproducts = async(req,res)=>{
    try{
    const products = await Product.findByIdAndDelete(req.params.id);
    api.success(res,products);
    }catch(error){
        api.error(res,error.message,"error in deleting the product");
    }
}