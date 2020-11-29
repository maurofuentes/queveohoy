const express = require("express");
const router = express.Router();
const peliculasController = require("../controladores/peliculasController");

router.get("/peliculas/", peliculasController.getMovies);

router.get("/generos", peliculasController.getGenders);

router.get("/peliculas/:anio/:titulo/:genero", peliculasController.getFilteredMovies);

module.exports = router;
