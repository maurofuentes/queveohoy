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
        console.log(results);

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
        console.log(results);

        resolve(results);
      }
    );
  });
};
