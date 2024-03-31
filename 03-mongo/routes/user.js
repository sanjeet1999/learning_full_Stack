const { Router, response } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db")

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    }).then((response)=>{
        res.json({
            msg:"User created successfully"
        })
    })

    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    Course.find({}).then((response)=>{
        res.json({
            courses:response
        })

    })
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseid = req.params.courseId;
    const username = req.headers.username;
    console.log(courseid,"courseid")
    User.updateOne({
        username,
    },{
        "$push":{
        purchasedCourses:courseid
        }
    }).then((resp)=>{
        res.json({
            msg:"Purchased Successfully"
        })
        }).catch((resp)=>{
            console.log("catch he ye",resp)
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const data = await User.findOne({
        username:req.headers.username 
    })
    console.log("mera data",data.purchasedCourses)
    const courses = await Course.find({
        _id:{
            "$in":data.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router