
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv = require("dotenv");
dotenv.config();
const passport = require("passport");
const User = require("../models/user.model.js");

console.log(process.env.GOOGLE_CLIENT_ID)
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
  async (googleAccessToken, googleRefreshToken, profile, done) => {
    // console.log(profile)
    try {

      let user = await User.findOne({ email: profile._json.email });


      if (!user) {
        user = await User.create({
          name: profile._json.name,
          email: profile._json.email,
        })
      }

      const accessToken = await user.generateAccessToken(user);
      
      await user.save();
      return done(null, { user, accessToken })
    } catch (error) {
      return done(error)
    }
  }
));