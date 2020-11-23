// get the client
const mysql = require('mysql2');
require('dotenv').config();
 
// create params to confing connection to database
const config = {
  host: process.env.DB_HOT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
};

// export connection to db
exports.connection=mysql.createConnection(config);

