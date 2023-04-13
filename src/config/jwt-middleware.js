const User = require('../models/User');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'jwt_secret';

const passportAuth = async (passport) => {
    console.log('Inside strategy');
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            await User.findOne({ id: jwt_payload.sub }, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                }
            })

        } catch (err) {
            console.log(err)
        }
    })
    )
}

module.exports = passportAuth;