const {Password,username} = require("./config.js")
const exp = require("express")
const app = exp()
console.log()
const mongoose = require("mongoose") 
// const { string } = require("zod")
// const { Schema } = require("zod")
const jwt = require("jsonwebtoken")
mongoose.connect(`mongodb+srv://${username}:${Password}@cluster0.057bgtb.mongodb.net/`)

// console.log("hey")
const checker = mongoose.model("users",{
    Username: String,
    Email: String,
    Password: Number,
    rollno: String})
app.use(exp.json())


function auth(req,res,next){
    const sigin_data = req.body.user_data
    const Email = sigin_data.Email
    const Password = sigin_data.Password
    res.Password = Password
    res.Email = Email
    next()
}

function ReadData(req,res,next){

    const user_data = req.body.user_data;
    res.user_Data = user_data
    res.Username = user_data.Username
    res.Email = user_data.Email
    res.Password = user_data.Password
    next()
}

async function CheckUserExist(req,res,next){
    const newuser = new checker({Email:res.Email,Username:res.Username,Password:res.Password})
    const found = await checker.findOne({Email:res.Email,Password:res.Password});
    res.found = found
    res.user_final_data = newuser
    next()
}


app.post("/signup",ReadData,CheckUserExist,(req,res)=>{
    if(res.found){
        res.status(302).json({msg:"username already exist"})
    }
    else{
        res.status(404).json({msg:"User Created properly"})
    }
    
     
})


app.post("/signin",auth,CheckUserExist,(req,res)=>{
    if (res.found){
        res.status(200).json({msg:"login successfully"})
    }
    else{
        res.status(404).json({msg:"Wrong credential"})
    }
})

app.listen(3000)