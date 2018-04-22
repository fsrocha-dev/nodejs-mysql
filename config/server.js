var express = require("express");
var app = express();
app.set("view engine", "EJS");
app.set("views", "./app/views");

module.exports = app;