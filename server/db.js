import mongoose from "mongoose";

async function connect(req, res, next) {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Database connection successful");
    } catch (error) {
        console.log("Failed to connect to DB", error);
        process.exit(1);
    }
}

export default connect;