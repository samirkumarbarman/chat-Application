//external imports
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';

//internal imports
import {notfoundhandeler, errorhandeler} from "./middleware/common/errorhandeler.js"

const app = express()
dotenv.config()


//database connection
mongoose.connect()

//request parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")

//set static folder
app.use(express.static(path.join(__dirname , "public")))


//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET))

//routes


//404 error handling
app.use(notfoundhandeler);

//common error handeling
app.use(errorhandeler);


app.listen(process.env.PORT, ()=> {
    console.log(`App is listenig at port ${process.env.PORT}`)
})