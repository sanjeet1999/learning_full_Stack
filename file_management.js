var exp = require('express')
const fs = require('fs')
var app = exp()
app.listen(3000)
app.use(exp.json())

app.get("/files",(req,res)=>{
    var all_files = fs.readdirSync('myfile')
    res.status(200).json({Response:"ok",data:all_files})
    // res.json({data:all_files})
    // if(fs.existsSync(myfiles)){
    //     console.log("I found the files ")
    //     res.status(200).json('status:ok')
    // }
    // else{
    //     res.status(404).send('status:file not found')
    // }
})  


app.get("/files/:filename?",(req,res)=>{
    const val = req.params.filename;
    console.log(`myfile/${val}`)
    console.log(fs.existsSync(`myfile/${val}`))
    if(fs.existsSync(`myfile/${val}`)){
        let all_files = fs.readFile(`myfile/${val}`,'utf8',(res,data)=>{ 
            console.log(data)
        // res.status(200).json({Response:`ok`,val:all_files})
    })
    res.send("ok")
}
    else{
        res.status(404).json({Response:`file not exist`})
    }

})
