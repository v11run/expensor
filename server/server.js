import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const port=4000;

const app= express();

app.use(cors);

 await mongoose.connect("mongodb+srv://Varun:tatakae123@cluster0.wgf6j5e.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database connection is successful"))


app.get('/',(req,res)=>{
    res.send("Hello worl");
})

app.listen(port,()=>{
    console.log("Server running in port 4000");
})