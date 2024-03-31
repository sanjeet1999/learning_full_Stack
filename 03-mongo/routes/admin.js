const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db")
const router = Router();
const { z } = require("zod")

// Admin Routes
router.post('/signup', (req, res) => {
    const username =  z.string(req.body.username);
    const password = z.string(req.body.password);
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

router.post('/courses',adminMiddleware, (req, res) => {
    const title  = req.body.title;
    const description =req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    console.log("price wala",imageLink)
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
    // Implement course creation logic
});

router.get('/courses',adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then((data)=>{
        res.json({
        courses: data
    })
    })
});

module.exports = router;