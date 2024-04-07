const jwt = require("jsonwebtoken")
const { json } = require("express");
const { jwt_secret }= require("../config")
function userMiddleware(req, res, next) {
    
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token  = req.headers.authorization
    console.log("tokken",token)
    const verified = jwt.verify(token,jwt_secret)
    req.username = verified
    if(req.username){
        next();
    }
    else{
        res.status(403).json({
            msg:"Invalid authentication"
        })
    }
}

module.exports = userMiddleware;