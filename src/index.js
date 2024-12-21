//require('dotenv').config({ path: './env' })

import dotenv from "dotenv";
import connectDb from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDb()




/*(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    } catch (error) {
        console.error("Error:", error)

    }
})()*/ //IIFE Approach