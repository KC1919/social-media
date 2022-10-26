import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db.js'
import postRouter from './routes/posts.js';

const app=express();

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts',postRouter);

app.get("/",(req,res)=>{
    res.send("Hello world");
})

const PORT=process.env.PORT || 3000;

app.listen(PORT, connectDB(), (req,res)=>{
    console.log("Server listening on port 3000");
});