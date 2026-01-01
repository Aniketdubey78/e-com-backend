

module.exports.success = (res,data=null,msg="message",status=200)=>{
    res.status(status).json({
        success:true,
        message:msg,
        data:data

    })
}
module.exports.error = (res,err,msg="ERROR",status=500)=>{
    res.status(status).json({
        success:false,
        message:msg,
        err:err
        
    })
}