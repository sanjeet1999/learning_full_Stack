const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://mrsep0007:qwerty123@cluster0.7rualsc.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }

})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}