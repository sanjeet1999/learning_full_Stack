const exp  = require('express')
const app = exp()

app.use(exp.json())


/* this is a global data so i can change it..and i can consider it as a database*/
var user = [{
    name:"john",
    kidney:[{
        healthy:false
    }]
}]



app.get("/",(req,resp)=>{
    const johnkidney = user[0].kidney;
    const kidneycount  = johnkidney.length
    let healthykidney = 0
    for (let i = 0; i<johnkidney.length;i++){
        if(johnkidney[i].healthy){
            healthykidney = healthykidney+1;
        }
    }
    let numberofunhealthykidney = kidneycount-healthykidney
    // console.log("new")
    resp.json({
        kidneycount,
        healthykidney,
        numberofunhealthykidney
    })
}   
)

app.post('/',(req,res)=>{
    if (!nounhealthykidney()){
    var val1 = req.body.isHealthy;
    user[0].kidney.push({
        healthy:val1
    })
    res.json({
        msg:"Done"
    })
    }
    else{
        res.status(411).json({msg:"Their is nothing to update"})
    }

})

app.put("/",(req,res)=>{
    for (let i = 0;i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy = true;
    }
    res.json("data updated")
})


app.delete("/",(req,res)=>{
    if(unhealthkidneypresent()){
        let allHealthykidney = []
        for (let i = 0; i<user[0].kidney.length;i++){
            if(user[0].kidney[i].healthy){
                allHealthykidney.push({
                    healthy:true
                })
            }
        }
        user[0].kidney=allHealthykidney
        res.json("all data deleted")
        }
    
    else{
        res.status(411).json({msg:"No bad kidney present here"})
    }
}
    )


// check if their is no unhealthy kidney

function nounhealthykidney(){
    let unhealthykidney = true
    for (let i = 0; i<user[0].kidney.length;i++){
        if(!user[0].kidney[i].healthy){
            return unhealthykidney
        }
        else{
            return unhealthykidney
        }
    }
}

function unhealthkidneypresent(){
   let unhealthy = false
   for(let i = 0;i<user[0].kidney.length;i++){
    if(!user[0].kidney[i].healthy){
        unhealthy=true
    }
   }
   return unhealthy
}

app.listen(3000);