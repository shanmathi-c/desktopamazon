import connection from "../config/index.js";

export class addController{
    static getAdd(req,res){
        connection.query(`SELECT * FROM addedit`,(err,result) =>{
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
    static getAdd(req,res){
        connection.query(`SELECT * FROM category`,(err,result) =>{
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

    static getAdddata(req,res){
        const add = req.body
        console.log("hdkjdk",add,'ytguewygtdeuwyu')
        connection.query("INSERT INTO addedit SET ?",[add],(err,result) =>{
            console.log('kkjh',result)
            if(err){
                console.log(err)
               return res.json({
                success : false,
                err,
               });
            }
         
            return res.json({
                success : true,
                book : result,
            });
        }) ;
    }
}





