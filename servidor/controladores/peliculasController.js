const peliculasRepo = require("../respositories/peliculasRepo");

exports.getMovies = async (req, res) => {

  try {

    const movies = await peliculasRepo.getAllMovies();

    res.status(200).json(movies);

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getGenders = async (req, res) => {

  try {
    
    const genders = await peliculasRepo.getAllGenders();

    res.status(200).json(genders);

  } catch (error) {

    res.status(500).json({ msg: error });

  }
};

exports.getFilteredMovies = async (req, res) => {
  const anio = req.params.anio;
  const titulo = req.params.titulo
  const genero = req.params.genero;
  

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
