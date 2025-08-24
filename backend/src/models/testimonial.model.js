const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    text: { // testimonial
      type: String,
      required: true,
      trim: true
    },
    uploadYourPhoto: {  // if not user their Name 
       type: String,
    },
    rating: { // max - 5
        type: Number,
        required: true,
        default: 1
    },
    social: {
        type: String
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace"
    },
    permission: { // I give permission to use this testimonial across social channels and other marketing efforts
        type: Boolean,
        require: true,
        default: false
    },
}, {timestamps: true});

const Testimonial = mongoose.Schema("Testimonial", testimonialSchema);

module.exports = Testimonial;