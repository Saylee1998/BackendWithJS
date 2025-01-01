//require('dotenv').config({ path: './env' })

import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './.env'
})


connectDb()
    .then(() => {

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running on port : ${process.env.PORT}`);

        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed!!!!", err);

    })




/*(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    } catch (error) {
        console.error("Error:", error)

    }
})()*/ //IIFE Approach