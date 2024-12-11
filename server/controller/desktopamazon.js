// Controller functions
import connection from "../config/index.js";

export class desktopamazonControler {
static getDetails(req, res){
    connection.query(`SELECT * FROM signin`, (err, result) => {
        if (err) {
            return res.json({
                success: false,
                err
              });
        }
    
        return res.json({
          success: true,
          books: result,
        });
      });
}
static getCreate(req,res){
    console.log("gfhgfrt")
    const desktopamazon = req.body
    console.log("gfhgfrt",desktopamazon)
    connection.query("INSERT INTO signin SET ?",[desktopamazon] ,(err,result) =>{
        if(err){
            return res.json({
                success:false,
                err
            })
        }
        return res.json({
            success:true,
        });
    });
}

}


