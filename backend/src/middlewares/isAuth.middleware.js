const AppError = require("../utils/Errors/app.error.js");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js")

const isAuth = async function (req, res, next) {
    try {

        const token =
            req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");
            
        if (!token) {
            throw new AppError("token is required", 401);
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        const user = await User.findById(decodedToken.id);
          
        if (!user) {
            throw new AppError("Invalid access token", 401);
        }
        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Invalid AccessToken",
            success: false,
            error: error
        })
    }
}

module.exports = isAuth;