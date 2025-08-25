const express = require("express");
const workspaceRoutes = require("./workspace.route.js");
const router = express.Router();

router.use("/workspace", workspaceRoutes);

module.exports = router;

