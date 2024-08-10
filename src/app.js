import express from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

//routes imports
import uploadRouter from "./routes/upload.routes.js"
import getRouter from "./routes/get.routes.js"

//router declaration
app.use("/api/v1/upload", uploadRouter);
app.use("/api/v1/get", getRouter);

export { app }