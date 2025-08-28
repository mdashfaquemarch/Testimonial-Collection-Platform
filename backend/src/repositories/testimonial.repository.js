const CrudRepository = require("./crud.repository.js");
const Testimonial = require("../models/testimonial.model.js")

class TestimonialRepository extends CrudRepository {

    constructor() {
        super(Testimonial);
    }
}

module.exports = TestimonialRepository;