// weather you use ..//db or ..//db/inde.js it will be consider equally
const { Admin } = require("../db")
const { z } = require("zod")
// Middleware for handling auth
function adminMiddleware(req,res, next) {
    const username = req.headers.username;
    const password =req.headers.password;
    console.log("yhaa tk aya",username)
    Admin.findOne({
        username,
        password
    }).then((value)=>{
        console.log(value,"data mila")
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"User dont exist"
            })
        }
    })
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}



module.exports = adminMiddleware;