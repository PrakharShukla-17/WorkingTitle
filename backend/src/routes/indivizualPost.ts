import { Router } from "express";
import { pool } from "../db";
export const postRouter=Router();


postRouter.get("/post/:id",async (req,res)=>{
    const id=req.params.id;

    const query=`SELECT username,avatar,descp,content.url
    FROM users
    JOIN posts ON posts.userId=users.id
    JOIN content ON content.id=posts.content
    WHERE posts.id=$1`;



    const result=await pool.query(query,[id]);

    return res.status(200).json({
        result:result.rows
    })
})