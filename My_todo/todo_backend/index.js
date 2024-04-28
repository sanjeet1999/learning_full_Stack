const express = require("express")
const app = express();
app.use(express.json());
const { createTodo,updateTodo } = require("./type")
const { todo } = require("./db")
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if (!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputes"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created successfully"
    })

})



app.get("/todos",async function(req,res){
    const alltodos = await todo.find({})
    res.json({
        alltodos
    })

})


app.put("/completed",async function(req,res){
    const updatedPayload = req.body;
    const parsePayload = updateTodo.safeParse(updatedPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
    }
    await todo.update({
        _id : req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

})


app.listen(3000)