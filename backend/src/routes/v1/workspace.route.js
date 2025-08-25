const express = require("express");
const { workspace } = require("../../controllers/index.js");

const router = express.Router();

router.post("/", workspace.createWorkspaceController);

router.get("/:workspaceId", workspace.getWorkspaceByIdController);

// get all workspace of a user
router.get("/:userId", workspace.getAllWorkspaceOfUserController);

router.delete("/:workspaceId", workspace.deleteWorkspaceController);

router.put("/:workspaceId", workspace.updateWorkspaceDetailController);

module.exports = router;