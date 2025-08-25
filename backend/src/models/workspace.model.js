const mongoose = require("mongoose");


const workspaceSchema = new mongoose.Schema({
    spaceName: {
        type: String,
        required: true,
        trim: true
    },
    workspaceLogo: {
        type: String,
    },
    title: { // header 
        type: String,
        required: true,
        trim: true
    },
    customMessage: { // markdown supported messages
        type: String,
        required: true,
        trim: true
    },
    // theme: {
    //     type: String,
    //     enum: ["DARK", "LIGHT"],
    //     default: "LIGHT"
    // },
    thankYouTitle: {
        type: String,
        default: "Thank You"
    },
    thankYouMessage: {
        type: String,
        default: "Thank you so much for your shoutout! It means a ton for us! 🙏"
    },
    thanYouLogo: {
        type: String
    },
    redirectURL: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
}, {timestamps: true});

const Workspace = mongoose.model("Workspace", workspaceSchema);

module.exports = Workspace;