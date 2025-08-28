const fs = require("fs");
const cloudinary = require('cloudinary').v2;


async function uploadOnCloudinary(localFilePath) {
    try {

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUDNAME,
            api_key: process.env.CLOUDINARY_CLOUDKEY,
            api_secret: process.env.CLOUDINARY_CLOUDSECRET,
        });
        
        if (!localFilePath) return null;
        const uploadResult = await cloudinary.uploader.upload(localFilePath)
        console.log(`🌨️ 🌤️ file uploaded successfully on cloudinary 🌧️ 🌧️ : `, uploadResult);
        fs.unlinkSync(localFilePath);

        return uploadResult;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log(error);
    }
}

async function deleteFromCloudary(params) {

}

module.exports = {
    uploadOnCloudinary,
    deleteFromCloudary
}