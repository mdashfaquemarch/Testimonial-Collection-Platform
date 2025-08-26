const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
     trim: true 
   },
   email: {
    type: String,
    required: true,
    trim: true,
    unique: true
   },
   avatar: {
    type: String
   },
   role: { type: String, enum: ['admin'], default: 'admin' }
}, {timestamps: true});



userSchema.pre("save", async function (next) {
  // generate unique avatar using our name
  this.avatar = `https://robohash.org/${this.name}`
   // if (!this.isModified("password")) return next();
  // user.password = bcrypt.hashSync(this.password, 10);
  next()
})

userSchema.methods.generateAccessToken = async function(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      algorithm: "HS256"
    }
  )
}

const User = mongoose.model("User", userSchema);

module.exports = User;