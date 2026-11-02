require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const { PORT } = require("./src/config/config")

async function StartServer() {
    try {
        await connectDB()
        console.log("MongoDB Atlas connected successfully");

        app.listen(PORT, () => {
            console.log("server started...")
        });
    } catch (error) {
        console.error("MongoDB Connection failed : ", error.message);
    }
}

StartServer();