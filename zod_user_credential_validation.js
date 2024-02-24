// WAP to validate the users data(username = string,employid = id,Gender = "M/F",BMI = in decimal )
const exp = require("express")
const app = exp()
const z = require("zod")

// username,empid,empGender these keywords must be same as we are sending it from the front end.



const schema = z.object({
    username:z.string(),
    empid : z.number(),
    empGender: z.literal("M").or(z.literal("F")),
    empBMI : z.number().multipleOf(0.1)
})
app.use(exp.json())

app.post("/user_credential",(req,res)=>{
    const emp_data = req.body.user_data
    const emp_clean_data = schema.safeParse(emp_data)
    console.log(emp_data)
    if (!emp_clean_data.success){
        res.status(411).json({msg:"Input data is invalid"})
    }
    else{
        res.send(emp_clean_data.data)
    }
})

app.listen(3000)