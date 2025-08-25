const CrudRepository = require("./crud.repository.js")
const Workspace = require("../models/workspace.model.js")

class WorkspaceRepository extends CrudRepository {

    constructor() {
        super(Workspace)
    }
}

module.exports = WorkspaceRepository;