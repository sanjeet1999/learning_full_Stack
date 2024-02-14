const exp = require("express")
const app = exp()

app.listen(3000)

// app.get("/user_check",function(req,res,next){
//     const username = req.headers.username;
//     const pass = req.headers.pass;
//     console.log(username,"this is crediential")
//     next()
// },function(req,res){
//     console.log("second wwala")
// })

// app.get("/",(req,res,next)=>{
//     console.log("this is first one")
//     next()
// },(req,res)=>{
//     console.log('second one')
//     res.send("bk")
// });
// 








// const exp = require("express")
// const app = exp()


// //READING USERID AND PASSWORD FROM HEADER 
// app.listen(3000)

// app.get("/health-checkup",(req,res)=>{
//     const username = req.headers.username;
//     console.log(username,"usename")
//     const password = req.headers.password;
//     console.log(password,"usename")
//     const kidneyid = req.query.kidneyid;
//     console.log(kidneyid)

//     if(username==='sanjeet'&&password==='qwerty1234'){
//         if(kidneyid==1 || kidneyid==2){
//             res.status(200).json({msg:"authentication successful"})
//             setTimeout(()=>{
//                 // res.status(200).json({msg:"you have healthy kidney"})
//                 console.log("your kidney is ok")
//             },2000)
            
//         }
//         else{
//             res.status(411).json({msg:"wrong input"})
//         }
    
//     }
//     else{
//         res.status(403).j son({
//             msg:"user not exist"
//         })
//     }
// })


function usercredential(req,res,next){
    let username = req.headers.username;
    let password = req.headers.password;
    if (username!='sanjeet'&& password!='Qwerty1234'){
        res.status(403).json({msg:'Incorrect user id password'})
    }
    else{
        next();
    }
}
 
function kidneyidcheck(req,res,next){
    let kidneyid = req.query.kidneyid;
    if(kidneyid!=1&&kidneyid!=2){
        res.status(403).json({msg:'Incorrect msg'})
    }
    else{
        next();
    }


}


app.get("/health-checkup",usercredential,kidneyidcheck,(req,res)=>{

    res.send("your hearth is healthy")
    
})
