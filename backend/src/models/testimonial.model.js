const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    text: { // testimonial
        type: String,
        required: true,
        trim: true
    },
    photo: {  // if not user their Name 
        type: String,
    },
    rating: { // max - 5
        type: Number,
        required: true,
        max: 5,
        default: 1
    },
    social: {
        type: String
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    },
    permission: { // I give permission to use this testimonial across social channels and other marketing efforts
        type: Boolean,
        default: false,
        require: true
    },
}, { timestamps: true });

const Testimonial = mongoose.Schema("Testimonial", testimonialSchema);

module.exports = Testimonial;