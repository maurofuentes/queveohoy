const express = require("express");
const router = express.Router();
const peliculasController = require("../controladores/peliculasController");

router.get("/peliculas", peliculasController.getMovies);

// regex101.com
// /:id(^[a-z]{0,10}$)
// /:id\\d+$
// knexjs.org
// lazydocker

router.get("/peliculas/recomendacion", peliculasController.getRecommended);

router.get("/peliculas/:id", peliculasController.getMovieById);

router.get("/generos", peliculasController.getGenders);

module.exports = router;
