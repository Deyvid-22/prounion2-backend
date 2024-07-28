import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER ,
    password : process.env.DB_PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados");
    }
    console.log("Conectado ao banco de dados");
});

export default connection;
