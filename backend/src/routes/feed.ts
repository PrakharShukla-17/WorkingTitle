import { Router } from "express";
import { pool } from "../db";

export const feedRouter=Router();

feedRouter.get("/",async (req,res)=>{
    //getting randome feed
    const page=Number(req.query.page )|| 1;
    const limit=Number(req.query.limit)|| 4;

    const offset=(page-1)*limit;

    const query=`SELECT username,avatar,descp,content.url
    FROM users
    JOIN posts ON posts.userId=users.id
    JOIN content ON content.id=posts.content
    LIMIT $1 OFFSET $2`;

    const result=await pool.query(query,[limit,offset]);

    return res.status(200).json({
        result: result.rows
    })

})


