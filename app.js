import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';

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


//routes


//error handling

app.listen(process.env.PORT, ()=> {
    console.log(`App is listenig at port ${process.env.PORT}`)
})