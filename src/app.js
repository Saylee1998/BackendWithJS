import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//settings for incoming data:

//data coming in form of json data : example -  after filling a form
app.use(express.json({ limit: "16kb" }))

//data coming from URL
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // for giving nested objects: extended:true

//for storing files,folder:example - kind of public assets
app.use(express.static("public"))

app.use(cookieParser())

export { app }

