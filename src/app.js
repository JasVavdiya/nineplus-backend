import express from "express";

const app = express();

//routes imports
import booksRouter from "./routes/book.routes.js"

//router declaration
app.use("/books", booksRouter);

export { app }