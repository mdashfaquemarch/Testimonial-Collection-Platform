
const {workspace} = require("../services/index.js")

async function createWorkspaceController(req, res, next) {
    try {

        const {spaceName, title, customMessage, theme, thankYouTitle, thankYouMessage, thanYouLogo, redirectURL} = req.body;
        console.log(req.files);
        const response = await workspace.createWorkspaceService()

        return res.status(201).json({
            success: true,
            
        })
    } catch (error) {
        
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