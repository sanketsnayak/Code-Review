import express from "express";
import router from "./routes/ai.routes.js";
import cors from "cors"
const app=express();

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello world").status(200);
})

app.use('/ai',router)

export default app;