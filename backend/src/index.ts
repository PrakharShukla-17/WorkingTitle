import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("hey there");
})


app.listen(3000);