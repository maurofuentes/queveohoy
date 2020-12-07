const express = require("express");
const router = express.Router();
const peliculasController = require("../controladores/peliculasController");

router.get("/peliculas?", peliculasController.getMovies);

router.get("/peliculas/:id", peliculasController.getMovieById);

router.get("/generos", peliculasController.getGenders);

// router.get("/peliculas/", peliculasController.getFilteredMovies);

module.exports = router;
