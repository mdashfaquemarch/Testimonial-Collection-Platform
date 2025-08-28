const express = require("express");
const workspaceRoutes = require("./workspace.route.js");
const testimonialRoutes = require("./testimonial.route.js");

const router = express.Router();

router.use("/workspace", workspaceRoutes);
router.use("/testimonial", testimonialRoutes);

module.exports = router;

