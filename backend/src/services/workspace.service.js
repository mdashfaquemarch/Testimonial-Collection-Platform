const {WorkspaceRepository} = require("../repositories/index.js")
const {uploadOnCloudinary} = require("../utils/common/cloudinary.js");
const AppError = require("../utils/Errors/app.error.js")

const workspaceRepo = new WorkspaceRepository();

async function createWorkspaceService(data, filesDetails, user) {
    try {
        //  console.log("data", data, filesDetails?.workspaceLogo[0].path);
        // console.log("data", data, filesDetails?.thanYouLogo[0].path);
          const workspaceLogoPath = filesDetails?.workspaceLogo[0].path;
          const thankYouLogoPath = filesDetails?.thanYouLogo[0].path;
          const userId = user._id;

          if(workspaceLogoPath) {
             const result = await uploadOnCloudinary(workspaceLogoPath);
            //  console.log("workspace link", result);
            if(result?.url) {
                data.workspaceLogo = result.url;
            }
          }

          if(thankYouLogoPath) {
            const result = await uploadOnCloudinary(thankYouLogoPath);
            // console.log("than you ->", result);
            if(result?.url) {
                data.thanYouLogo = result.url;
            }
          }

          const alreadyWorkspaceExists = await workspaceRepo.findByName({spaceName: data.spaceName});

          if(alreadyWorkspaceExists) {
             throw new AppError("worksapce with this name already exists ", 400);
          }

          if(userId) {
            data.createdBy = user;
          }

        const createdWorkspace = await workspaceRepo.create(data);
        
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

async function getAllWorkspaceOfUserService(userId) {
 try {
    
    const allworkspace = await workspaceRepo.findByUser(userId)
    return allworkspace;
 } catch (error) {
    console.log(error)
 }
}

async function deleteWorkspaceService(worksapceId) {
    try {
        const doc = await workspaceRepo.destroy(worksapceId);
        return doc;
    } catch (error) {
        console.log(error);
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