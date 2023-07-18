const express = require("express");
const app = express();
const notifier = require('node-notifier');

//definição do bodyParser
const bodyParser = require("body-parser");


//definição do view engine
app.set("view engine", "ejs");

//definição da pasta public para css, js e img
app.use(express.static("public"));

//configuração do bodyParser - serve para trabalhar com os formulários
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rota para a página inicial
app.get("/", (req, res) => {
    res.render("index");
});




//servidor
app.listen(1518, ()=>{
    console.log("Servidor Rodando na porta 1018");
});
