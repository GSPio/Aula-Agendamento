const express = require("express");                                         //Chama a Express
const app = express();                                                      //Cria a Instância do Express
const bodyParser = require("body-parser");                                  //Chama a BodyParser
const mongoose = require("mongoose");                                       //Chama o Mongoose
const AppointmentService = require("./services/AppointmentService")         //Chama o Serviço de Agendamento


app.use(express.static("public"));                  //Faz a configuração do uso de arquivos estáticos (Fullcalendar.io)
app.use(bodyParser.urlencoded({extended: false}));  //Configura o BodyParser
app.use(bodyParser.json());                         
app.set("view engine", "ejs");                      //Define o EJS como view engine

mongoose.connect("mongodb://localhost:27017/Fisio", {useNewUrlParser: true, useUnifiedTopology: true});         //Faz a conexão com o Mongoose

// app.get("/", (req, res) => {
//     res.send("Bem-vindo à Home de agendamento!");
// }); //Cria a rota

app.get("/", (req, res) =>{
    res.render("index")});

app.get("/cadastro",(req, res) =>
{res.render("create")});

app.post("/create", async(req,res) =>
{
    var status = await AppointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.idade,
        req.body.cpf,
        req.body.telefone,
        req.body.origem,
        req.body.date,
        req.body.time
        )
    if(status){
        res.redirect("/");
    }
    else{
        res.send("Ocorreu uma falha.");
    }
});

app.get("/consultas", async (req, res) =>{
    var appointments = await AppointmentService.GetAll(false);
    res.json(appointments);
});

app.listen(4500, () => {}); //Abre o servidor