const mongoose = require("mongoose");


const likeSchema = new mongoose.Schema(
    {
        testimonial: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Testimonial"
        },
        workspace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workspace"
        }
       
    },
    { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;