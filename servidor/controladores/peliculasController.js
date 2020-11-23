const peliculasRepo = require('../respositories/peliculasRepo');

exports.getPeliculas = async (req, res) => {
 
    try {
      const peliculas = await peliculasRepo.getAll();
      
      res.status(200).json(peliculas);
  
    } catch (error) {
      res.status(500).json({msg: error});
    }
  
  };