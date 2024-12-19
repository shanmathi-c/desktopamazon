import express from 'express';
import cors from "cors";
import bodyparser from "body-parser";

import desktopamazonRouter from './routes/desktopamazon.js';
import purchaseRouter from './routes/purchase.js';
import addRouter from './routes/add.js';
import adminRouter from './routes/admin.js';

const app = express();
const PORT = 5001;

app.use(cors()); 
app.use(bodyparser.json());



app.use("/desktopamazon",desktopamazonRouter );
app.use("/purchase",purchaseRouter);
app.use("/add",addRouter);
app.use("/admin",adminRouter);



app.get("/",(req,res) =>{
    console.log("working")
    res.send("this is homepage")
});

app.listen(PORT,() => {console.log("SEVER IS RUNNING IN PORT 5001")});