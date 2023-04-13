const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserService = require('../services/user-service');
const userService = new UserService();

const signupUser = async (req, res) => {
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

const loginUser = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    signupUser,
    loginUser
}