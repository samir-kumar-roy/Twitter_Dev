const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jtw = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
});
userSchema.pre('save', function (next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    return jtw.sign({ id: this._id, email: this.email }, "jwt_secret", {
        expiresIn: '6h'
    });
}

const User = mongoose.model('User', userSchema);
module.exports = User;