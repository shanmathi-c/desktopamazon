import express from "express";

import {desktopamazonControler} from "../controller/desktopamazon.js";
const router = express.Router();
router.get("/get",desktopamazonControler.getDetails)
router.post("/create",desktopamazonControler.getCreate)
router.get("/",(req,res) =>{
    res.send("get desktopamazon router ")
})
  


export default router;