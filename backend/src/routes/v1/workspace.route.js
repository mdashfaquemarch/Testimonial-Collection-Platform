const express = require("express");
const { workspace } = require("../../controllers/index.js");
const upload = require("../../middlewares/multer.middleware.js")

const router = express.Router();

router.post("/", upload.fields([
    {
        name: 'workspaceLogo',
        maxCount: 1
    },
    {
        name: "thanYouLogo",
        maxCount: 1
    }
]), workspace.createWorkspaceController);

router.get("/:workspaceId", workspace.getWorkspaceByIdController);

// get all workspace of a user
router.get("/:userId", workspace.getAllWorkspaceOfUserController);

router.delete("/:workspaceId", workspace.deleteWorkspaceController);

router.put("/:workspaceId", workspace.updateWorkspaceDetailController);

module.exports = router;