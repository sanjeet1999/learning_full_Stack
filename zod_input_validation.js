const express = require("express")
const app = express()
const zod = require("zod")
const schema = zod.array(zod.number());
app.use(express.json())

app.post("/enter_array",(req,res)=>{
    const arr = req.body.arr;
    console.log(arr)

// zod will through error 
    const got_array = schema.safeParse(arr)
    res.send(got_array)
})
app.listen(3001)
// This program will only take an array of numbers from body otherwise zod will through an error
