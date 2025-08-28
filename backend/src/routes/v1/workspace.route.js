const express = require("express");
const { workspace } = require("../../controllers/index.js");
const upload = require("../../middlewares/multer.middleware.js");
const isAuth = require("../../middlewares/isAuth.middleware.js");

const router = express.Router();

router.post("/",isAuth, upload.fields([
    {
        name: 'workspaceLogo',
        maxCount: 1
    },
    {
        name: "thanYouLogo",
        maxCount: 1
    }
]), workspace.createWorkspaceController);

router.get("/:workspaceId",isAuth, workspace.getWorkspaceByIdController);

// get all workspace of a user
router.get("/",isAuth, workspace.getAllWorkspaceOfUserController);

router.delete("/:workspaceId", isAuth, workspace.deleteWorkspaceController);

router.put("/:workspaceId", isAuth, workspace.updateWorkspaceDetailController);

module.exports = router;