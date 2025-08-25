const User = require("../models/user.model.js");
const CrudRepository = require("./crud.repository.js");

class UserRepository extends CrudRepository{

    constructor() {
        super(User)
    }

}


module.exports = UserRepository;