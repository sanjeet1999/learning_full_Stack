const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken")
const router = Router();
const { Admin,Course } = require("../db")
const { jwt_secret }= require("../config")
const z = require('zod')

// Admin Routes
router.post('/signup', (req, res) => {
    const username =  req.body.username;
    const password = req.body.password;
    Admin.create({
        username : username,
        password :password
    }).then(()=>{
        res.json({
            msg:"Admin Created Successfully"
        })
    })
    // Implement admin signup logic
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userfind = await Admin.find({
        username,
        password
    })
    if (userfind){
        const token = jwt.sign(username,jwt_secret);
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            msg:"Incorrect User information"
        })
    }
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title  = req.body.title;
    const description =req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    console.log("price wala",price)
    console.log("imageLink",imageLink)
    console.log("description",description)
    console.log("title",title)
    Course.create({
        title,
        description,
        imageLink,
        price
    }).then((courseid)=>{
        console.log(courseid._id,"course id")
        res.json({
            message:"Course Created Successfully",
            courseId:courseid._id
        })
    })
});

router.get('/courses',adminMiddleware, (req, res) => {
    console.log("yhhha aya ")
    // Implement fetching all courses logic
    Course.find({}).then((data)=>{
        res.json({
        courses: data
    })
    })
});

module.exports = router;