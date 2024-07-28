import app from "./app";
import connection from "./database"; 

const PORT:string | number = process.env.PORT || 3333;

connection.ping((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados");
        process.exit(1);
    } else {
        console.log("Conexão com o banco de dados verificada com sucesso'");
        app.listen(PORT, () => {
            console.log(`Server running port ${PORT}`);
        });
    }
});


