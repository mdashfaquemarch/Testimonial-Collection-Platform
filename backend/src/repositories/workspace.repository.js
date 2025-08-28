const CrudRepository = require("./crud.repository.js")
const Workspace = require("../models/workspace.model.js")

class WorkspaceRepository extends CrudRepository {

    constructor() {
        super(Workspace)
    }

    async findByUser(userId) {
        const doc = await Workspace.find({createdBy: userId});
        return doc;
    }
}

module.exports = WorkspaceRepository;