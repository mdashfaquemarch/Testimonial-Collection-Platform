const express = require("express");
const isAuth = require("../../middlewares/isAuth.middleware.js");
const { testimonial } = require("../../controllers/index.js");


const router = express.Router();


router.post("/", isAuth, testimonial.createTestimonialController)

module.exports = router;