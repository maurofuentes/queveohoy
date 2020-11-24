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