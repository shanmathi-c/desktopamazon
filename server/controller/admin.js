import connection from "../config/index.js";

export class adminController{
    static  getAdmin(req,res){ 
        connection.query(`SELECT * FROM addedit `,(err,result) =>{
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
    static getIndiAdmin(req,res){
        connection.query(`SELECT * FROM  addedit WHERE adminId = ${req.query.adminId}` ,(err,result) =>{
            if(err){
                return res.json({
                    success : false,
                    err
                });
            }
            
            return res.json({
                success : true,
                result : result
            });
        });
    }  

}

export class updateController{
    static putAdmin(req, res) {  
        console.log("body", req.body);
    
        const adminId = req.body.adminId; // Product ID from URL
        console.log("adminId", adminId);
    
        const { productName, price, purchaseRate, cartRate } = req.body; // Updated data
    
        // Corrected SQL query
        const sqlQuery = 'UPDATE addedit SET productName = ?, price = ?, purchaseRate = ?, cartRate = ? WHERE adminId = ?';
    
        connection.query(sqlQuery, [productName, price, purchaseRate, cartRate, adminId], (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error updating admin',
                    error: err
                });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Admin not found'
                });
            }
            res.json({
                success: true,
                message: 'Admin updated successfully'
            });
        });
    }
    
    static getEditdata(req,res){
        const add = req.body
        console.log("add===========>",add)
        connection.query(`UPDATE INTO addedit WHERE adminId = ${add.adminId} SET ?`,[add],(err,result) =>{
            console.log('result',result)
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
