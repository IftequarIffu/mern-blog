const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const userModel = require('../models/userModel')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_URI}/auth/google/callback`
},
    async function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        const googleId = profile.id
        console.log(profile)
        try {
            const userExists = await userModel.findOne({ googleId })
            if (!userExists) {
                const newUser = await userModel.create({ googleId, name: profile.displayName, email: profile.emails[0].value })
                // console.log(newYoutuber)
                cb(null, newUser)
            }
            else {
                // console.log(youtuberExists)
                cb(null, userExists)
            }
        } catch (error) {
            // console.log(error)
            cb(error)
        }
    }
));
