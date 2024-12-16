import connection from "../config/index.js";

export class purchaseController{
    static getData(req,res){
        connection.query(`SELECT * FROM customer`,(err,result) =>{
            if(err){
                return res.json({
                    success:false,
                    err
                });
            }
            return res.json({
                success:true,
                book:result
            });
        });
    }
    static getInformation(req,res){
        const purchase = req.body
        console.log("hdkjdk",purchase)
        connection.query("INSERT INTO customer SET ?",[purchase],(err,result) =>{
            if(err){
               return res.json({
                success : false,
                err,
               });
            }
            return res.json({
                success : true,
            });
        }) ;
    }
    }
