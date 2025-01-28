const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const user = req.headers.username;
    const pass = req.headers.password;
    User.create({
        username: user,
        password: pass,
    })
    .then(() => {
        res.json({msg: "User created successfully"})
    })
    .catch((err) => {
        res.status(403).send("User couldn't be created")
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({course: response})
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username
    User.updateOne({
        username: username
    }, {
        purchasedCourses: {
            "$push": courseId
        }
    })
    .then(res.json({
        msg: "Purchase complete"
    }))
    .catch((err) => {
        res.status(403).json({msg: "Error occured"})
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const courses = User.find({purchasedCourses})
    res.json({courses: courses})
});

module.exports = router