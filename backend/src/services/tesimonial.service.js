const { TestimonialRepository } = require("../repositories/index.js");
const { uploadOnCloudinary } = require("../utils/common/cloudinary.js");

const testimonialRepo = new TestimonialRepository();


async function createTestimonialService(data, file) {
    try {

        const photoLocalpath = file?.path;

        if (!photoLocalpath) {
            const photoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                data.firstname + " " + data.lastname
            )}&background=random`;
            data.photo = photoUrl
        }

        if (photoLocalpath) {
            const result = await uploadOnCloudinary(photoLocalpath);
            data.photo = result.url;
        }

        const createdTestimonial = await testimonialRepo.create(data);
        return createdTestimonial;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createTestimonialService
}