const express = require("express");
const cors = require("cors");
require("./config/passport.config.js")
const cookieParser = require("cookie-parser");
const passport = require("passport");


const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(cookieParser())


// api

app.get('/auth/google',
  passport.authenticate('google', { session: false, scope: ['profile', 'email'], prompt: 'consent' }));

app.get('/auth/google/callback', 
  passport.authenticate('google', {session: false, failureRedirect: `${process.env.BASE_URL}/signin` }),
  (req, res) => {
    // Successful authentication, redirect home.
    const {user, accessToken} = req.user;

    const options = {
        httpOnly: true,
        secure: true,
        maxAge: 24*60*60*1000,
        sameSite: 'Lax'
      }
    res.cookie("accessToken", accessToken, options);

    // redirect to frontend here;

    res.redirect(`${process.env.BASE_URL}/dashboard`)

    // console.log("user ", user);
    // console.log("accessToken", accessToken);

    // res.json({user, accessToken});
  });

module.exports = app;