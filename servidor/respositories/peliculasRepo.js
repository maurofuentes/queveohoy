const dbconnection = require("../lib/conexionbd");

// get all movies from DB pelicula table
exports.getAllMovies = () => {
  return new Promise(function (resolve, reject) {
    dbconnection.connection.execute(
      "SELECT * FROM pelicula",
      function (err, results, fields) {
        if (err) {
          console.log(err);

          reject("error al ejecutar la consulta");
        }
        // console.log(results);

        resolve(results);
      }
    );
  });
};

// get movie by ID
exports.getById = (id) => {
  return new Promise(function (resolve, reject) {
    dbconnection.connection.execute(
      "SELECT * FROM pelicula WHERE id = ?",
      [id],
      function (err, results, fields) {
        if (err) {
          console.log(err);

          reject("error al ejecutar la consulta");
        }
        // console.log(results);

        resolve(results);
      }
    );
  });
};

// get all gender from DB genero table
exports.getAllGenders = () => {
  return new Promise(function (resolve, reject) {
    dbconnection.connection.execute(
      "SELECT * FROM genero",
      function (err, results, fields) {
        if (err) {
          console.log(err);

          reject("error al ejecutar la consulta");
        }
        // console.log(results);

        resolve(results);
      }
    );
  });
};

// filter movies by params
exports.filterMovies = (anio, titulo, genero) => {

  return new Promise(function ( resolve, reject ) {

    dbconnection.connection.execute("SELECT * FROM pelicula WHERE anio = ? AND titulo = ? AND genero_id = ?",
    [anio, titulo, genero],
    function (err, results, fields) {
      if(err){
        console.log(err);

        reject("error al ejecutar la consulta");

      }
      // console.log(results);

      resolve(results);

    });

  });

}