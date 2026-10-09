import express from "express";
const app=express();
import {feedRouter} from "./routes/feed"



app.use(express.json());


app.use("/api/feed",feedRouter);

app.get("/",(req,res)=>{
    res.send("hey there");
})



app.listen(3000);