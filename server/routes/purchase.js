import express from "express";

import { purchaseController } from "../controller/purchase.js";
const router = express.Router();
console.log("hiii")
router.get("/get",purchaseController.getData)
router.post("/create",purchaseController.getInformation)
router.get("/",(req,res) =>{
    res.send("this is purchase router")
})
export default router;

