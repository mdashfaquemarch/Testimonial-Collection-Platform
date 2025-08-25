const mongoose = require("mongoose");

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
   }
}, {timestamps: true});



userSchema.pre("save", async function (next) {
  // generate unique avatar using our name
  this.avatar = `https://robohash.org/${this.name}`
  next()
})

const User = mongoose.model("User", userSchema);

module.exports = User;