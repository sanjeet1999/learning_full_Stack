const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db")
const jwt = require("jsonwebtoken")
const { jwt_secret } = require("../config")
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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const userfind = await User.find({
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

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    var all_courses = await Course.find({})
    console.log("sara courses",all_courses)
    res.json({
        all_courses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    var courseid = req.params.courseId
    var user = req.username
    console.log("user naam",req.username)
    User.updateOne(
        {username:user},{
        $push:{purchasedCourses:courseid}
    }).then((resp) => {
        res.json({
            msg:"Course purchased Successfully"
        });
    })
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    console.log(req.username,"name")
    const all_courses = await User.findOne({
        username:req.username
    })
    console.log(all_courses.purchasedCourses,"sare courses")
    res.json({"purchased_Courses":all_courses.purchasedCourses})

});

module.exports = router