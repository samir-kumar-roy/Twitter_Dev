const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
userSchema.pre('save', function (next) {
    console.log("this from user model", this);
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    console.log("Salt ", SALT);
    console.log('normal password ', user.password);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;