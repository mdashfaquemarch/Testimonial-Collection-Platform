const dotenv = require("dotenv");
const app = require("./app.js");
const {connectDatabase } = require("./config/index.js")

dotenv.config();

connectDatabase()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on PORT: ${process.env.PORT} ✈️`);
        })
    }).catch((error) => {

        console.log(`database connection failed: 💀`, error);

    })

