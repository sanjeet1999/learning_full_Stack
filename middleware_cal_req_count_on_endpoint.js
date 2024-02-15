// will try to calculate total no. of request our endpoint gets

const exp = require("express")
app = exp()
app.listen(3000)
var count = 0
function countRequest(req,res,next){
    count = count+1
    console.log(count,"total requests")
    next()
}


app.get("/count",countRequest,(req,res)=>{
    res.json({msg:count})
})