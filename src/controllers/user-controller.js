const UserService = require('../services/user-service');
const userService = new UserService();

const signupUser = async (req, res) => {
    console.log('consroller hit');
    console.log(req.body);
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });

        return res.status(201).json({
            Success: true,
            Message: "signup with authentication successful",
            Error: {},
            Data: response
        });
    } catch (err) {
        return res.status(500).json({
            Success: false,
            Message: "signup with authentication failed",
            Error: err,
            Data: {}
        });
    }
}

module.exports = {
    signupUser
}