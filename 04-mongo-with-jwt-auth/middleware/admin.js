const jwt = require("jsonwebtoken")
const { json } = require("express");
const { jwt_secret }= require("../config")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    try{
        const token  = req.headers.authorization
    console.log("sakjfda",token)
    console.log("autho",jwt_secret)
    const verified = jwt.verify(token,jwt_secret)
    console.log(verified,"Data")
    if(verified){
        console.log("yee chla")
        next();
    }
    else
    {
        res.status(403).json({
            msg:"Invalid authentication"
        })
    }

    }
    catch(e){
        res.json({
            msg:"incorrect token"
        })
    }
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
}

module.exports = adminMiddleware;