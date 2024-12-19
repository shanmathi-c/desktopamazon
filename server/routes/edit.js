import express from "express";
const router = express.Router();
router.get("/",(req,res) => {
    console.log("get res",res)
    res.send("get edit router")
})

export default router;