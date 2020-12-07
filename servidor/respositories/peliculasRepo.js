const dbconnection = require("../lib/conexionbd");

// get all movies from DB pelicula table
exports.getAllMovies = (params) => {

 console.log(params);

  const currentPage = params.pagina;

  const titulo = params.titulo;
  
  const anio = params.anio;
 
  const genero = params.genero;
  
  const orden = params.columna_orden;
  
  const tipoOrden = params.tipo_orden;


  /*
  * verificamos qué parámetros vienen por URL para filtrar las peliculas de la tabla pelicula
  */ 

  // sólo titulo
  if(titulo){

    // titulo + genero
    if(genero){

      // titulo + genero + anio
      if (anio){

        return new Promise(function (resolve, reject) {
          dbconnection.connection.execute(
            "SELECT * FROM pelicula WHERE titulo = ? AND anio = ? AND genero_id = ? ORDER BY " + orden + " " + tipoOrden,
            [titulo, anio, genero],
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

      }

      // si no está anio, busca por titulo y genero_id
      return new Promise(function (resolve, reject) {
        dbconnection.connection.execute(
          "SELECT * FROM pelicula WHERE titulo = ? AND  genero_id = ? ORDER BY " + orden + " " + tipoOrden,
          [titulo, genero],
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

    }

    // titulo + anio
    if (anio){

      return new Promise(function (resolve, reject) {
        dbconnection.connection.execute(
          "SELECT * FROM pelicula WHERE titulo = ? AND anio = ? ORDER BY " + orden + " " + tipoOrden,
          [titulo, anio],
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

    }

    // si no está ni anio ni genero, busca solo por titulo
    return new Promise(function (resolve, reject) {
      dbconnection.connection.execute(
        "SELECT * FROM pelicula WHERE titulo = ? ORDER BY " + orden + " " + tipoOrden,
        [titulo],
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

// si no está titulo...
// solo anio
  } else if(anio){

    // anio + genero
    if(genero){

      return new Promise(function (resolve, reject) {
        dbconnection.connection.execute(
          "SELECT * FROM pelicula WHERE anio = ? AND genero_id = ? ORDER BY " + orden + " " + tipoOrden,
          [anio, genero],
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

    }

    // si no esta genero, busca solo por anio
    return new Promise(function (resolve, reject) {
      dbconnection.connection.execute(
        "SELECT * FROM pelicula WHERE anio = ? ORDER BY " + orden + " " + tipoOrden,
        [anio],
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
  
    // si no esta ni título ni anio...
    // solo genero
  } else if(genero){

    return new Promise(function (resolve, reject) {
      dbconnection.connection.execute(
        "SELECT * FROM pelicula WHERE genero_id = ? ORDER BY " + orden + " " + tipoOrden,
        [genero],
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
  
    // si no hay parametros de BiquadFilterNode.apply.apply.
    // consulta que devuelve todas las peliculas de la tabla pelicula
  } else {
    return new Promise(function (resolve, reject) {
      
      let start = 0;

      if(currentPage > 1){
        start = (currentPage - 1) * 52;
      }

      let query = "SELECT * FROM pelicula ORDER BY " + orden + " " + tipoOrden + " LIMIT " + start + ", " + 52;

      console.log(query);

      dbconnection.connection.execute(
        query,
        function (err, results, fields) {
          if (err) {
            console.log(err);

            reject("error al ejecutar la consulta desde linea 184");
          }

          resolve(results);
        }
      );
    });
  }
};

// get movie by ID
exports.getById = (id) => {
  return new Promise(function (resolve, reject) {
    dbconnection.connection.execute(
      "SELECT pelicula.id, pelicula.titulo, pelicula.duracion, pelicula.director, pelicula.anio, pelicula.poster, pelicula.trama, pelicula.fecha_lanzamiento, pelicula.puntuacion,pelicula.genero_id, actor.nombre AS actores, genero.nombre FROM pelicula INNER JOIN actor_pelicula ON pelicula.id = actor_pelicula.pelicula_id INNER JOIN actor ON actor_pelicula.actor_id = actor.id INNER JOIN genero ON pelicula.genero_id = genero.id WHERE pelicula.id = ? ",
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