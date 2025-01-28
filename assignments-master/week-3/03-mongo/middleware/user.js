const { User } = require("../db/index")
async function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; //madhav@gmail.com
    const password = req.headers.password; //123456
    const response = await User.findOne({
        username: username,
        password: password
    })
    if (!response) {
        res.status(403).json({
            'msg': "Invalid admin credentials"
        })
    } else {
        next();
    }
}

module.exports = userMiddleware;