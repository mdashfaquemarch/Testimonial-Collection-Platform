const mongoose  = require("mongoose");
const {DB_NAME} = require("../utils/common/constants.js");





const connectDatabase = async function () {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(`Database Connected Successfully : 😀😁 `, connectionInstance.connection.host);

    } catch (error) {
        console.log(`Database Connection Failed : 🥺😭 `, error);
        process.exit(1);
    }
}

module.exports = connectDatabase;