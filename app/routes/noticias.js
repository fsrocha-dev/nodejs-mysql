module.exports = function(app){

    app.get("/noticias", function(req, res){

        //chamando método mysql.
        var mysql = require("mysql");
        //invocando funcao de conexao do modulo mysql.
        var connection = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "1234",
            database : 'portal_noticias'
        });
        //funcao para consulta no banco de dados.
        connection.query("select * from noticias", function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    });
};