//paquetes necesarios para el proyecto
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const peliculasRoute = require("./servidor/routes/peliculasRoute");
var morgan = require('morgan');


const app = express();


app.use(cors());

app.use(morgan('tiny'));

app.use( bodyParser.urlencoded( { extended: true } ) );

app.use(bodyParser.json());

app.use("/", peliculasRoute);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
const puerto = "8080";

app.listen(puerto, function () {
  console.log("Escuchando en el puerto " + puerto);
});
