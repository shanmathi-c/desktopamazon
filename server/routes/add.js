import express from "express";

import { addController } from "../controller/add.js";
const router = express.Router();
console.log("hiii")
router.get("/get",addController.getAdd)
router.post("/create",addController.getAdddata)
router.get("/",(req,res) =>{
    res.send("this is purchase router")
})
export default router;

