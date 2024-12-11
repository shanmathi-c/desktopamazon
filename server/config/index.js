import mysql from "mysql2";
var connection = mysql.createConnection({
    host:"pmya.canary.lmesacademy.net",
    port:25060,
    user:"shanmathi",
    password:"404]2KfqU[sfzfQ",
    database:"10_shamnathi",
});
connection.connect((err) =>{
    if(err){
        console.log(err,25060)
    }
    else console.log("successfully")
});
export default connection;