const peliculasRepo = require("../respositories/peliculasRepo");

exports.getMovies = async (req, res) => {

  const params = req.query;

  try {

    const peliculas = await peliculasRepo.getAllMovies(params);

    res.status(200).json({peliculas : peliculas, total : peliculas[0].total});

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
       pelicula : peliculas[0],
       actores : peliculas
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

exports.getRecommended = async (req, res) => {

  const params = req.query;

  console.log(params);
  
  try {
    
    const recomended = await peliculasRepo.getRecomendedMovies(params);

    res.status(200).json({peliculas : recomended});

    console.log(recomended);


  } catch (error) {

    res.status(500).json({ msg: error });

  }
};