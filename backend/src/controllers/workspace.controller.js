
const { workspace } = require("../services/index.js");
const AppError = require("../utils/Errors/app.error.js")

async function createWorkspaceController(req, res, next) {
    try {

        let data = { ...req.body }; // clone instead of mutating req.body


        if (!data.spaceName.trim() || !data.title.trim() || !data.customMessage.trim()) {
            throw new AppError("fields are required", 400);
        }

        // normalize optional fields
        data.theme = data.theme || null;
        data.thankYouTitle = data.thankYouTitle || null;
        data.thankYouMessage = data.thankYouMessage || null;
        data.redirectURL = data.redirectURL || null;

        // console.log("data", data, req.files?.workspaceLogo[0].path);
        // console.log("data", data, req.files?.thanYouLogo[0].path);

        const workspaceLogoPath = req.files?.workspaceLogo[0].path;

        if(!workspaceLogoPath) {
            throw new AppError("workspace Logo is required", 400);
        }

        const response = await workspace.createWorkspaceService(data, req.files, req.user);

        return res.status(201).json({
            success: true,

        })
    } catch (error) {
        console.log(error);
    }
}

async function getWorkspaceByIdController(req, res, next) {
    try {

    } catch (error) {

    }
}

async function getAllWorkspaceOfUserController(req, res, next) {
    try {

    } catch (error) {

    }
}

async function deleteWorkspaceController(req, res, next) {
    try {

    } catch (error) {

    }
}

async function updateWorkspaceDetailController(req, res, next) {
    try {

    } catch (error) {

    }
}

module.exports = {
    createWorkspaceController,
    getAllWorkspaceOfUserController,
    getWorkspaceByIdController,
    deleteWorkspaceController,
    updateWorkspaceDetailController
}