const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://mrsep0007:qwerty123@cluster0.7rualsc.mongodb.net/Mongo_Project');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"
    }]
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}