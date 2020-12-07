const peliculasRepo = require("../respositories/peliculasRepo");

exports.getMovies = async (req, res) => {

  const params = req.query;

  console.log(params);

  try {

    const peliculas = await peliculasRepo.getAllMovies(params);

    res.status(200).json({peliculas : peliculas, total : peliculas.length});


  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getMovieById = async (req, res) => {

  const peliculaId = req.params.id;


  try {

    const peliculas = await peliculasRepo.getById(peliculaId);

    res.status(200).json(
      {
        pelicula : peliculas[0]
      }
    );

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getGenders = async (req, res) => {

  try {
    
    const generos = await peliculasRepo.getAllGenders();

    res.status(200).json({generos : generos});

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getFilteredMovies = async (req, res) => {

  if(req.query.anio){

    const anio = req.query.anio;

  }

  if(req.query.titulo){

    const titulo = req.query.titulo;

  }

  if(req.query.genero){

    const genero = req.query.genero;

  }

  try {

    const filteredMovies = await peliculasRepo.filterMovies(anio, titulo, genero);

    if (filteredMovies.length === 0) {
      return res.status(404).json({
        msg: "no se encontraron peliculas con los datos especificados",
      });
    }

    res.status(200).json(filteredMovies);

  } catch (error) {

    return res.status(500).json({ msg: "fallo el controlador" });

  }
};
