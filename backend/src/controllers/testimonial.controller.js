const {testimonial} = require("../services/index.js")

async function createTestimonialController(req, res, next) {
    try {
        let data = { ...req.body };
        if (!req.params.worskpace) {
            return res.status(400).json({
                success: false,
                message: "workspace Id or name is required",
            })
        }


        if (!data.firstname || !data.lastname || !data.email || !data.text || !data.rating || !data.permission) {
            return res.status(400).json({
                success: false,
                message: "fields are required",
            })
        }

        data.worskpace = req.params.worskpace;
        if(data.social) data.social = data.social || null;

        const response = await testimonial.createTestimonialService(data, req.file);

        return res.status(400).json({
            success: true,
            data: response,
            message: "successfully created testimonial"
        })
    } catch (error) {

    }
}

module.exports = {
    createTestimonialController
}