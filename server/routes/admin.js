import express from "express";

import { adminController, updateController } from "../controller/admin.js";
const router = express.Router();
console.log("hiii")
router.get("/get",adminController.getAdmin)
router.get("/get/indi",adminController.getIndiAdmin)
router.put("/put/update-admin",updateController.putAdmin)
router.post("/post",updateController.getEditdata)





router.get("/",(req,res) =>{
    console.log("res",res)
    res.send("this is admin router")
})
export default router;

