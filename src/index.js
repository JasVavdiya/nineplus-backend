import dotenv from "dotenv";
dotenv.config()
import connectDB from './db/db_connection.js';
import {app} from './app.js'


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is running.........")
    })
})
.catch((error)=>{
    console.log("mongodb connection failed", error);
})
