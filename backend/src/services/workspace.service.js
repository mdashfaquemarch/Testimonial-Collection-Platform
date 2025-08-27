const {WorkspaceRepository} = require("../repositories/index.js")


const workspaceRepo = new WorkspaceRepository();

async function createWorkspaceService(data, filesDetails, user) {
    try {
         console.log("data", data, filesDetails?.workspaceLogo[0].path);
        console.log("data", data, filesDetails?.thanYouLogo[0].path);
        
         const userId = user._id;

        const createdWorkspace = await workspaceRepo.create();



        return createdWorkspace;
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