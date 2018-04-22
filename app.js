var app = require("./config/server");

var home = require("./app/routes/home")(app);
var rotaNoticias = require("./app/routes/noticias")(app);
var novaNoticia = require("./app/routes/dashboard")(app);

app.listen(3000, function(){
    console.log("Servidor Ativo.");
})