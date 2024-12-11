import express from 'express';
import cors from "cors";
import bodyparser from "body-parser";

import desktopamazonRouter from './routes/desktopamazon.js';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyparser.json());



app.use("/desktopamazon",desktopamazonRouter );

app.get("/",(req,res) =>{
    console.log("working")
    res.send("this is homepage")
});

app.listen(PORT,() => {console.log("SEVER IS RUNNING IN PORT 5001")});