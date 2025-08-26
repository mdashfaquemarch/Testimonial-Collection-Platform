const {WorkspaceRepository} = require("../repositories/index.js")


const workspaceRepo = new WorkspaceRepository();

async function createWorkspaceService(data) {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

async function getWorkspaceByIdService() {
    try {
        
    } catch (error) {
        
    }
}

async function getAllWorkspaceOfUserService() {
 try {
    
 } catch (error) {
    
 }
}

async function deleteWorkspaceService() {
    try {
        
    } catch (error) {
        
    }
}

async function updateWorkspaceDetailService() {
  try {
    
  } catch (error) {
    
  }
}

module.exports = {
    createWorkspaceService,
    getAllWorkspaceOfUserService,
    getWorkspaceByIdService,
    deleteWorkspaceService,
    updateWorkspaceDetailService
}