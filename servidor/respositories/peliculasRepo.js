const dbconnection = require('../lib/conexionbd');

exports.getAll = () => {

    return new Promise(function ( resolve, reject ) {

        dbconnection.connection.execute("SELECT * FROM pelicula", function (err, results, fields) {
            if(err){
                console.log(err);
        
                reject("error al ejecutar la consulta");

            }
            console.log(results);
    
            resolve(results);
    
        });

    });

}