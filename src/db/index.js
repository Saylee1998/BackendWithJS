import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        //to get details on which host we are connected
        console.log(`\n MONGODB CONNECTED!!! DB HOST:${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDb Connection error:", error);
        throw error

    }
}

export default connectDb