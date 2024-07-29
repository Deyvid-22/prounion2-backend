import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER ,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect()

export const Query = (sql:string)=>{

    return new Promise((resolve,reject)=>{
        connection.query(sql,(erro,results)=>{

            if(erro){
                reject(Error);
            }else{
                resolve(results);
            }
        })

    })
}
