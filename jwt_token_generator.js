const exp = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "112233"

const app = exp()

app.use(exp.json())


const all_user=[
    {
        username:"sanjeetkr987152@gmail.com",
        pass:"123",
        name:"sanjeet"
    },
    {
        username:"kunal1@gmail.com",
        pass:"1234",
        name:"kunal"
    },
    {
        username:"rahul@gmail.com",
        pass:"12345",
        name:"rahul"
    }

]


function userNotExist(newusername,newpass){
    for(const i = 0;i<=all_user.length;i++){
        if(newusername==all_user[0]['username']&&newpass==all_user[0]['pass']){
            return true

        }
    }
}


app.post("/signup",(req,res)=>{
    console.log("yha")
    const newusername = req.body.user_data.clusername
    const  newpass = req.body.user_data.clpassword
    console.log("name",newusername)
    if(!userNotExist(newusername,newpass)){
        res.status(403).json({
            msg:"user doesn't exist in our in memory db",
        });
    }
    var token = jwt.sign({newusername:newusername},jwtPasswordS);
    console.log("TOken",token)
    return res.json({token,});
    })


app.listen(3000)

