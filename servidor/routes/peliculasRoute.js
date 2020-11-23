const express = require('express');
const router = express.Router();
const peliculasController = require('../controladores/peliculasController');

router.get('/', peliculasController.getPeliculas);

module.exports=router;
