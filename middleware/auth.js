const jwt = require("jsonwebtoken");
const api = require("../utils/api");

module.exports.isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) {
            return api.error(res, "no token provided", "Unauthorized access", 401);
        }
       
        const user = jwt.verify(token, process.env.JWT_SECRET);
         
        if (!user) {
            return api.error(res, "invalid token", "unauthorised access", 401);
        }

        req.user = user;
        next();
       
    } catch (error) {
        return api.error(res, error.message, "unauthorised access", 401);
    }
};

module.exports.isSeller = (req, res, next) => {
    try {
        if (!req.user) {
            return api.error(res, "unauthenticated", "unauthorised access", 401);
        }
        
        if (req.user.role !== "seller") {
            return api.error(res, "forbidden", "this action is allowed for sellers only", 403);
        }
        next();
    } catch (error) {
        return api.error(res, error.message, "unauthorised access", 401);
    }
};